const router = require('express').Router();
const sequelize = require('../../config/connection.js');
const { Traveller, Location, Trip} = require('../../model');



router.get('/', async (req, res) => {
    try {
      const  travellerData = await Traveller.findAll();
      res.status(200).json(travellerData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

//   router.post('/', async (req, res) => {
//     try {
//       const  newData = await Travellers.create({category_name: req.body.category_name});
//       res.status(200).json();
//     } catch (err) {
//       res.status(400).json(err);
//     }
//   });


//   router.get('/:id', async (req, res) => {
//     try {
//       const  = await .findByPk(req.params.id, {
//         include: [{ model: }],
//       });
  
//       if (!) {
//         res.status(404).json({ message: 'No category found with that id!' });
//         return;
//       }

//       res.status(200).json();
//     } catch (err) {
//       res.status(500).json(err);
//     }
// });

// router.delete('/:id', async (req, res) => {
//     try {
//       const  = await .destroy({
//         where: {
//           id: req.params.id,
//         },
//       });
//       console.log('Category was deleted...')
//       if (!) {
//         res.status(404).json({ message: 'No category found with that id!' });
//         return;
//       }
  
//       res.status(200).json();
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   });

module.exports = router;