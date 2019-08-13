const m = require('../models/cars');

exports.all = async (req, res) => {
  try {
    const inventory = await m.list();

    if (!inventory.length) {
      return res.status(404).json({
        message: "No cars in stock.",
        success: false
      });
    }

    return res.json({
      inventory,
      success: true
    });
  } catch (error) {
    return res.status(500).json({
      error,
      message: "Cars could not be retrieved.",
      success: false
    });
  }
};

exports.one = async (req, res) => {
  const { id } = req.params;

  try {
    const [ inventory ] = await m.list(id);
    
    if (!inventory) {
      return res.status(404).json({
        message: `Car ${id} does not exist.`,
        success: false
      });
    }

    return res.json({
      inventory,
      success: true
    });
  } catch (error) {
    return res.status(500).json({
      error,
      message: "Car could not be retrieved.",
      success: false
    });
  }
};