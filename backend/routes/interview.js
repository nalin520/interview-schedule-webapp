const router = require('express').Router();  //importing express router
let Interview = require('../models/interview.model');


// for displaying the participants

router.route('/').get((req, res) => {
  Interview.find()
    .then(Interviews => res.json(Interviews))
    .catch(err => res.status(400).json('Error: ' + err));
});

// addding new participants

router.route('/add').post((req, res) => {
  const name = req.body.name;
  const timein = req.body.timein;
  const timeout = (req.body.timeout);

  const newInterview = new Interview({
    name,
    timein,
    timeout,
  });

  newInterview.save()
  .then(() => res.json('Interview added!'))

  .catch(err => res.status(400).json('Error: ' + err));
});

// for updating the participants

router.route('/update/:id').post((req, res) => {
  Interview.findById(req.params.id)
    .then(Interview => {
      Interview.name = req.body.name;
      Interview.timein = req.body.timein;
      Interview.timeout = req.body.timeout;
      if(Interview.timein>Interview.timeout){
        console.log('invalid time')
      }
      else{
      Interview.save()
        .then(() => res.json('Interview updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
      }
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;