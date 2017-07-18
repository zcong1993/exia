const btn = document.querySelector('#btn')
const output = document.querySelector('.code')

btn.addEventListener('click', () => {
  const input = document.querySelector('#url')
  let url = input.value && input.value.trim()
  if (!url) return
  url = '/?url=' + encodeURIComponent(url)
  getData(url)
})

function getData(url) {
  return fetch(url)
    .then(r => r.json())
    .then(d => {
      output.innerHTML = JSON.stringify(d.data || {}, null, 4)
    })
    .catch(err => {
      output.innerHTML = err.message
    })
}
