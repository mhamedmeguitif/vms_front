import React, { Component } from 'react'
import './home.css'
import Cookies from 'js-cookie'

export default class Home_page extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div class="parentHome"> 
          
        <div class="hd">
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#about">About </a></li>
                <li><a href="#proj">LIBRERIES</a></li>
                <li><a href="#cont">Contact</a></li>
                {Cookies.get('jwt') ? <li><a href="/realtime">Panel</a></li> : <li><a href="/login">Login</a></li>}
            </ul>
        </div>

        <div class="home">
                <span>Hello, There </span>
                <h1>ESI-SBA-VMS</h1>
                <p>BIG BROTHER IS WATCHING</p>
                <hr/>
                <i class="far fa-check-circle"/>
	    </div>
        <div class="about" id="about">
		    
            <div class="abname">ABOUT THE PROJECT </div>
		    
            <div class="info">
            This work was carried out by a group of students from the Higher School of Computer Science in sidi belabess, May 08, 1945, under the supervision of the respected professor   Mohamed ELARBI BOUDIHIR  ,  and the Military Research and Development Unit , this work is a prototype of VMS program.
            </div>
		    
            <div class="subcontainabout">
                
		    </div>

		    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Emblem_of_Algeria.svg/1200px-Emblem_of_Algeria.svg.png" data-anijs="if: scroll, on: window, do: bounceIn animated, before: $scrollReveal" width="159px"/>
	    </div>
        
        <div class="skill">
		    <div class="skname">TECHNOLOGIES USED</div>
		    <div class="skillsets">
                <div class="sk" data-anijs="if: scroll, on: window, do: bounceIn animated, before: $scrollReveal repeat"><i class="fab fa-html5"></i>HTML5</div>
                <div class="sk" data-anijs="if: scroll, on: window, do: bounceIn animated, before: $scrollReveal repeat"><i class="fab fa-css3"></i>CSS3</div>
                <div class="sk" data-anijs="if: scroll, on: window, do: bounceIn animated, before: $scrollReveal repeat"><i class="fab fa-js"></i>JavaScript</div>
                <div class="sk" data-anijs="if: scroll, on: window, do: bounceIn animated, before: $scrollReveal repeat"><i class="fas fa-paint-brush"></i>UI-UX</div>
                <div class="sk" data-anijs="if: scroll, on: window, do: bounceIn animated, before: $scrollReveal repeat"><i class="fab fa-react"></i> React js </div>
                <div class="sk" data-anijs="if: scroll, on: window, do: bounceIn animated, before: $scrollReveal repeat"><i class="fab fa-python"></i>Python</div>
	    	</div>
	    </div>
        <div class="proj" id="proj">
		    <div class="prname">SOME LIBRARIES USED FOR DEEP LEARNING</div>
		    <div class="prlist">
			
            <div class="pritem pr1" data-anijs="if: scroll, on: window, do: rollIn animated, before: $scrollReveal">
                <a target="_blank" href="https://www.tensorflow.org/">
				    <img src="https://i.ytimg.com/vi/yjprpOoH5c8/maxresdefault.jpg"/>
                        <p class="des">
                            <span class="code">&lt;</span> TENSERFLOW<span class="code">&#47;&gt;</span> 
                        </p>
                </a>
            </div>

			<div class="pritem pr2" data-anijs="if: scroll, on: window, do: rollIn animated, before: $scrollReveal">
                <a target="_blank" href="https://pytorch.org/">
				    <img src="https://miro.medium.com/max/691/0*xXUYOs5MWWenxoNz"/>
                        <p class="des">
                            <span class="code">&lt;</span> PYTORCH <span class="code">&#47;&gt;</span>
                        </p>
			    </a>
            </div>

			<div class="pritem pr3" data-anijs="if: scroll, on: window, do: rollIn animated, before: $scrollReveal">
                <a target="_blank" href="https://opencv.org/">
				    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3TUAYqus9mPSLXO4JBewwvTeJiwxw1euNFQDIjCrgo6IUOde_OKufyHeKL2d2smODyE0&usqp=CAU"/>
                        <p class="des">
                            <span class="code">&lt;</span> OPENCV <span class="code">&#47;&gt;</span>
                        </p>
			    </a>
            </div>
            
			<div class="pritem pr4" data-anijs="if: scroll, on: window, do: rollIn animated, before: $scrollReveal">
                <a target="_blank" href="https://pjreddie.com/darknet/yolo/">
                    <img src="https://pjreddie.com/media/image/yologo_2.png"/>
                        <p class="des">
                            <span class="code">&lt;</span> YOLO <span class="code">&#47;&gt;</span>
                        </p>
			    </a>
            </div>

			<div class="pritem pr5" data-anijs="if: scroll, on: window, do: rollIn animated, before: $scrollReveal">
                <a target="_blank" href="https://www.pyimagesearch.com/2020/09/14/getting-started-with-easyocr-for-optical-character-recognition/">
				    <img src="https://www.pyimagesearch.com/wp-content/uploads/2020/09/easyocr_header.png"/>
                        <p class="des">
                            <span class="code">&lt;</span> EASYOCR<span class="code">&#47;&gt;</span>
                        </p>
			    </a>
            </div>

			<div class="pritem pr6" data-anijs="if: scroll, on: window, do: rollIn animated, before: $scrollReveal">
                <a target="_blank" href="https://keras.io/">
				    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQshisSXR5aLZwL8YLt8xnLOmdHnaluN4Zyeg&usqp=CAU"/>
                        <p class="des">
                            <span class="code">&lt;</span> KERAS<span class="code">&#47;&gt;</span>
                        </p>
			    </a>
            </div>
	    </div>
	</div>

      
    <div class="cont" id="cont">
		<div class="contname">
                C<i class="fas fa-user-circle"></i>
            NTACT 
        </div>
		<div class="contain">
			<div class="social">
				<div class="subname"></div>
				<div class="subdes">Social</div>
				<div class="subcontain" data-anijs="if: scroll, on: window, do: rubberBand animated, before: $scrollReveal repeat">
					<a target="_blank" href="https://github.com/" title="GitHub"><i class="fab fa-github"></i></a>
					<a target="_blank" href="https://www.linkedin.com" title="LinkedIn"><i class="fab fa-linkedin"></i></a>
					<a target="_blank" href="https://mail.google.com/" title="Gmail"><i class="far fa-envelope"></i></a>
				</div>
			</div>

			<div class="link">
				<div class="subname"></div>
				<div class="subdes">Navigate</div>
				<div class="subcontain" data-anijs="if: scroll, on: window, do: rubberBand animated, before: $scrollReveal repeat">
					<a href="#">Home</a>
					<a href="/about_us">About Us</a>
					<a href="#proj">LIBRERIES</a>
				</div>
			</div>
		</div>
	</div>
      
      
      </div>
    )
  }
}