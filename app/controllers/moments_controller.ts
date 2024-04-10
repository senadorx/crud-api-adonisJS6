import type { HttpContext } from '@adonisjs/core/http'

import Moment from '#models/moment'

export default class MomentsController {
  //--------------------------------------------------------
  public async store({ request, response }: HttpContext) {
    const body = request.body()

    const moment = await Moment.create(body)

    response.status(201)

    return { 
        message: 'Momento criado com Sucesso!',
        data: moment,
     }
  }

//--------------------------------------------------------
  public async index(){
    const moments = await Moment.all()

    return {
      data: moments
    }

  }
//--------------------------------------------------------
    public async show({params}: HttpContext){

      const moment = await Moment.findOrFail(params.id)

      return {
        data: moment
      }

    }
    //--------------------------------------------------------
    public async destroy({params}: HttpContext){

      const moment = await Moment.findOrFail(params.id)
      await moment.delete()

      return {
        message: 'Momento deletado com sucesso!',
        data: moment
      }

    }
    //--------------------------------------------------------
    public async update({params, request}: HttpContext){

      const moment = await Moment.findOrFail(params.id)

      const body = request.body()
      
      moment.title = body.title
      moment.description = body.description

      await moment.save()

      return {
        message: 'Momento atualizado com sucesso!',
        data: moment
      }
    }
    //--------------------------------------------------------

}
