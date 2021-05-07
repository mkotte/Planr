const router = require('express').Router();
const { User } = require('../../models');

router.get('/', async (req, res) => {
    // find all users
    try{
      const userData = await User.findAll()
      res.status(200).json(userData)
    } catch (err) {
      res.status(500).json(err)
    }
  });

  router.post('/', async (req, res) => {
    // create a new user
    try{
      const userData = await User.create(req.body)
      res.status(200).json(userData)
    } catch (err){
      res.status(500).json(err)
      console.log(err)
    }
  });

router.post('/login', async (req, res) => {
    try {
        const user = await User.findOne({ where: { email: req.body.email } });

        
        if (!user) {
            res
                .status(400)
                .json({ message: 'Incorrect email or password, please try again' });
            return;
        }

        const validPassword = user.checkPassword(req.body.password);
        console.log(req.body.password)
        console.log(validPassword);
        if (!validPassword) {
            res
                .status(400)
                .json({ message: 'Incorrect email or password, please try again' });
            return;
        }

        req.session.save(() => {
            req.session.user_id = user.isSoftDeleted;
            req.session.logged_in = true;

            res.json({ user: user, message: 'You are now logged in!' });
        });

        }catch (err) {
            res.status(400).json(err);
        }
});

router.post('/logout', (req, res) => {
    if (req.session.logged_in) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    }else {
        res.status(404).end();
    }
});

router.get('/:id', async (req, res) => {
    // find a single user by its `id`
    try{
      const userData = await User.findByPk(req.params.id)
      
      if(!userData){
        res.status(404).json({message: 'No User found with this ID!'})
        return;
      }
  
      res.status(200).json(userData)
    } catch (err){
      res.status(500).json(err)
      console.log(err);
    }
  });

  router.put('/:id', async(req, res) => {
    // update a board's name by its `id` value
    try{
      const userData = await User.update(req.body, {
        where: {
          id: req.params.id,
        },
      });
      if (!userData){
        res.status(404).json({message: 'No user found with this id!'})
      }
      res.status(200).json({message:'Successfully updated'})
    } catch (err){
      res.status(500).json(err)
    }
  });

  router.delete('/:id', async (req, res) => {
    // delete on user by its `id` value
    try{
      const userData = await User.destroy({where: {id: req.params.id}})
      if (!userData){
        res.status(404).json({message: 'No user found with this ID!'})
      }
      res.status(200).json({message:'Successfully deleted'})
    } catch (err){
      res.status(500).json(err)
    }
  });

module.exports = router;
