import request from 'superagent'

const rootUrl = '/api/v1'

export function getHaiku () {
  return request.get(rootUrl + '/haiku')
    .then(res => {
      let joke = JSON.parse(res.body.haiku.text).joke
      return joke
    })
}
