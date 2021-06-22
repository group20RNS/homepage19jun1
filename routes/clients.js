const router = require('express').Router();

let Client=require('../models/clients.model');
router.route('/').get((req, res) => {
    Client.find()
    .then(exercises => res.json(exercises))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const clientname = req.body.clientname;
  const clientcontact = req.body.clientcontact;
  const clientaddress = req.body.clientaddress;
  const clientmode = req.body.clientmode;
  const clientemailaddress = req.body.clientemailaddress;
  const clientimageurl = req.body.clientimageurl;
  const clientsell = Number(req.body.clientsell);
  const clientBuy = Number(req.body.clientBuy);
  const client_clients = Number(req.body.client_clients);
  const clientbio = req.body.clientbio;
const prd=req.body.prd;

  const newClientapproval = new Client({
    clientname,
    clientcontact,
    clientaddress,
    clientmode,
    clientsell,
    clientBuy,
    client_clients,
    clientemailaddress,
    clientimageurl,
    prd,
    clientbio,
   
  });

  newClientapproval.save()
  .then(() => res.json(req.body))
  .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/').get((req, res) => {
  Client.find()
  .then((resu) =>{
    res.json(resu)
  } )
  .catch(err => res.status(400).json('Error: ' + err));
});
/*router.route('/edit/:id').get((req, res) => {
  Clientapproval.findByIdAndDelete(req.params.id)
  .then((resu) =>{
    clientsrejects.insertMany(resu).then((s)=>res.json(s))
  } )
  .catch(err => res.status(400).json('Error: ' + err));
});
/*router.route('/:id').get((req, res) => {
    Clientapproval.findById(req.params.id)
    .then(exercise => res.json(exercise))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    Clientapproval.findByIdAndDelete(req.params.id)
    .then(() => res.json('Exercise deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
    Clientapproval.findById(req.params.id)
    .then(exercise => {
      exercise.username = req.body.username;
      exercise.description = req.body.description;
      exercise.duration = Number(req.body.duration);
      exercise.date = Date.parse(req.body.date);

      exercise.save()
        .then(() => res.json('Exercise updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});
*/
module.exports = router;