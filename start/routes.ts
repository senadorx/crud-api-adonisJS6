import MomentsController from '#controllers/moments_controller'
import router from '@adonisjs/core/services/router'

router.get('/', () => {
  return {
    msg: 'Home',
  }
})

router.post('moments', [MomentsController, 'store'])
router.get('moments', [MomentsController, 'index'])
router.get('moments/:id', [MomentsController, 'show'])
router.delete('moments/:id', [MomentsController, 'destroy'])
router.patch('moments/:id', [MomentsController, 'update'])

//PATCH: atualiza somente o que foi enviado no corpo da requisicao
//PUT: atualiza tudo no corpo da requisição
