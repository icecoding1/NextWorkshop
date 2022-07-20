
import Router from 'next/router';
import Nav from '../components/nav'

const handleClickIndex = () => Router.push({
  pathname: '/'
})

const handleClickAbout = () => Router.push({
  pathname: '/about'
})

export default function ServicePage() {
  return (
    <div>
      Welcome to information tecnology
      <br />
      <button onClick={handleClickIndex}>Index Page</button>
      <button onClick={handleClickAbout}>About Page</button>
    </div>
  )
}