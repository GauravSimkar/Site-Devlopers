import React from 'react'
import './header.css'

function Header () {
  return (
   <>
   <div class="hero">
         <nav>
      <div class="nav__content">
        <div class="logo"><a href="#">Mitchell</a></div>
        <label for="check" class="checkbox">
          <i class="ri-menu-line"></i>
        </label>
        <input type="checkbox" name="check" id="check" />
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#"></a></li>
          <li><a href="#"></a></li>
          <li><a href="#">Login</a></li>
          <li><a href="#">Cart(0)</a></li>
        </ul>
      </div>
    </nav>
    <section class="section">
      <div class="section__container">
        <div class="content">
          <p class="subtitle">HELLO</p>
          <h1 class="title">
            I'm <span>Mitchell<br />a</span> Web Developer
          </h1>
          <p class="description">
            Welcome to my web developer portfolio! I'm Mitchell, a skilled and
            creative web developer with a passion for creating beautiful,
            responsive, and user-friendly websites. I've worked on a variety of
            web projects, ranging from personal blogs to e-commerce platforms.
          </p>
          <div class="action__btns">
            <button class="hire__me">Hire Me</button>
            <button class="portfolio">Portfolio</button>
          </div>
        </div>
        <div class="image">
          <img src="https://media.istockphoto.com/id/1295274245/photo/random-multicolored-spheres-computer-generated-abstract-form-of-large-and-small-balls-3d.jpg?s=612x612&w=0&k=20&c=q7NOl28YxIIOqKu6em50VlKrg6ISFyVww_nLOCr5W_A=" alt="profile" />
        </div>
      </div>
    </section>
    </div>
    </>
  )
}
export default Header;
