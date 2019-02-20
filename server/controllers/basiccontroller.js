const basicController = {};

basicController.get = (req, res) => {
  res.json({
    message: "Hello from controllers"
  });
};

export default basicController;
