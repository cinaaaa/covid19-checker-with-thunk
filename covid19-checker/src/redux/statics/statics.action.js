export const fetchStatics = () => dispatch => {

  const url = 'https://covid19.mathdro.id/api';

  fetch(url).then( async (response) => {
    if (response.ok) {
      let data = await response.json()

      dispatch({
        type: 'FETCH',
        payload: {
          recovered: data.recovered.value,
          deaths: data.deaths.value,
          confirmed: data.confirmed.value,
        }
      })

    }
  })

}
