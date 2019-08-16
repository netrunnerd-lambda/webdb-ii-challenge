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

exports.remove = async (req, res) => {
  const { id } = req.params;

  try {
    const deleted = await m.remove(id);

    if (!deleted) {
      return res.status(404).json({
        message: `Car ${id} does not exist.`,
        success: false
      });
    }

    return res.json({
      message: `Car ${id} deleted.`,
      success: true
    });
  } catch (error) {
    return res.status(500).json({
      error,
      message: "Car could not be deleted.",
      success: false
    });
  }
};

exports.submit = async (req, res) => {
  let car = req.body;
  const length = Object.keys(car).length;
  const { make, model, mileage, vin } = car;

  if (length === 0) {
    return res.status(400).json({
      message: "Missing car data.",
      success: false
    });
  }

  if (length > 0 && !make || !model || !mileage || !vin) {
    return res.status(400).json({
      message: "Missing required make, model, mileage or VIN.",
      success: false
    });
  }

  try {
    car = await m.new(car);

    if (car) {
      return res.json({
        car,
        success: true
      });
    }
  } catch (error) {
    return res.status(500).json({
      error,
      message: "Car could not be saved.",
      success: false
    });
  }
};

exports.update = async (req, res) => {
  const { id } = req.params;

  try {
    let [ car ] = await m.list(id);

    if (!car) {
      return res.status(404).json({
        message: `Car ${id} does not exist.`,
        success: false
      });
    }

    car = req.body;
    const length = Object.keys(car).length;

    if (!length) {
      return res.status(400).json({
        message: "Missing car data.",
        success: false
      });
    }

    car = await m.update(id, car);

    if (car) {
      return res.json({
        car,
        success: true
      });
    }
  } catch (error) {
    return res.status(500).json({
      error,
      message: `Car ${id} could not be modified.`,
      success: false
    });
  }
};