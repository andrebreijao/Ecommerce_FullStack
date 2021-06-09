import asyncHandler from 'express-async-handler';
import Order from '../models/orderModel.js';
import sendMail from '../utils/sendOrderEmail.js';

// @desc    Create new order
// @route   POST /api/orders
// @access  Private
const addOrderItems = asyncHandler(async (req, res) => {
  const {
    orderItems,
    shippingAddress,
    paymentMethod,
    itemsPrice,
    shippingPrice,
    totalPrice,
  } = req.body;

  if (orderItems && orderItems.length === 0) {
    res.status(400);
    throw new Error('Sem itens no pedido');
    return;
  } else {
    const order = new Order({
      orderItems,
      user: req.user._id,
      shippingAddress,
      paymentMethod,
      itemsPrice,
      shippingPrice,
      totalPrice,
    });

    console.log(order);

    const createdOrder = await order.save();

    const items = orderItems
      .map(function (e) {
        return e.titulo;
      })
      .join();

    //email de confirmação

    sendMail(req.user.name, items, req.user.email, totalPrice);

    res.status(201).json(createdOrder);
  }
});

// @desc    Get order by ID
// @route   GET /api/orders/:id
// @access  Private
const getOrderById = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id).populate(
    'user',
    'name email'
  );

  if (order) {
    res.json(order);
  } else {
    res.status(404);
    throw new Error('Pedido não encontrado');
  }
});

// @desc    Update order to paid
// @route   GET /api/orders/:id/pay
// @access  Private
const updateOrdertoPaid = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id);
  console.log(req.params.id);

  if (order) {
    order.isPaid = true;
    order.paidAt = Date.now();
    order.paymentResult = {
      id: req.body.id,
      status: req.body.status,
      update_time: req.body.update_time,
      email_address: req.body.payer.email_address,
    };

    const updateOrder = await order.save();

    res.json(updateOrder);
  } else {
    res.status(404);
    throw new Error('Pedido não encontrado');
  }
});

// @desc    Get loged in user orders
// @route   GET /api/orders/myorders
// @access  Private
const getMyOrders = asyncHandler(async (req, res) => {
  const orders = await Order.find({ user: req.user._id });

  res.json(orders);
});

const teste = (req, res) => {
  const id = req.params.id;
  console.log('funcao de teste');
  res.send(`seu id é ${id}`);
};

export { addOrderItems, getOrderById, getMyOrders, updateOrdertoPaid, teste };
