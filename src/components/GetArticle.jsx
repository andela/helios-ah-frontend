import React from 'react';
import imgBgStyle from '../utilities/imgBgStyle';
import Navbar from '../views/Navbar';
import Button from './Button';

const GetArticle = ({ }) => (
  <div>
    <Navbar />
    <div className="container">
      <div className="row">
        <div className="col-xs-12 article-container">
          <div className="article-title">
            <h1>How To Train A Dragon</h1>
          </div>
          <div className="user-profile">
            <div
              className="profile-image"
              style={imgBgStyle('https://image.flaticon.com/icons/png/512/149/149071.png')}
            />
            <div className="profile-details">
              <p>Ademola Hussain</p>
              <p>12/03/2018 12:00pm</p>
              <Button
                className="follow-btn"
                value="Follow"
                type="button"
              />
            </div>
          </div>
          <div
            className="image-container"
            style={imgBgStyle('https://images.pexels.com/photos/551628/pexels-photo-551628.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')}
          />
          <div className="article-body">
            <p>
              To train a dragon is not that hard all you neeed to is call a special chant and do whatever. Well, the other parts of this will not make any sense because I am going to add some lerem ipium test just to make this whole article make somemore sense.

              Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Lorem ipsum dolor sit amet, duo ridens repudiandae ex, deleniti suavite feugait hendrerit.

              Mea ea soluta delenit, ne quo omnis quaestio prodesset. Illum praesent salutandi no sed. Ea modo impetus pri, te quodsi menandri adipisci duo, accusata invenire qualisque ut per. In ius labores similique, iisque copiosae an cum, cu mei unum sonet alienumRichard McClintock, a Latin professor at Hampden-Sydney College in Vate ut pri. Ad his alterum honestatis, ea mel decorirginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going throrem ipsum dolor sit amet, duo ridens repudiandae ex, deleniti suavite feugait.

              Hendrerit. Mea ea soluta delenit, ne quo omnis quaestio prodesset. ough the cites of the word inorem ipsum dolor sit amet, duo ridens repudiandae ex, deleniti suavite feugait hendrerit. Mea ea soluta delenit, ne quo omnis quaestio prodesset.  classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very orem ipsum dolor sit amet, orem ipsum dolor sit amet, duo ridens repudiandae ex, deleniti suavite feugait hendrerit. Mea ea soluta delenit, ne quo omnis quaestio prodesset. duo ridens repudiandae ex, deleniti suavite feugait hendrerit. Mea ea soluta delenit, ne quo omnis quaestio prodesset. popular during the Renaissancorem ipsum dolor sit amet, duo ridens repudiandae ex, deleniti suavite feugait hendrerit. Mea ea soluta delenit, ne quo omnis quaestio prodesset. e. The first line oforem ipsum dolor sit amet, duo ridens repudiandae ex, deleniti suavite feugait hendrerit. Mea ea soluta delenit, ne quo omnis quaestio prodesset.  Lorem Ipsum, Renaissancorem ipsum dolor sit amet, duo ridens repudiandae ex, deleniti suavite feugait hendrerit. Mea ea soluta delenit, ne quo omnis quaestio prodesset. e. The first line oforem ipsum dolor sit amet, duo ridens repudiandae ex, deleniti suavite feugait hendrerit.
              {' '}

            </p>
          </div>
          <div className="article-icons">
            <div className="like">
              <i className="fa fa-heart" />
            </div>
            <div className="report">
              <i className="fa fa-flag" />
            </div>
            <div className="rating">
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default GetArticle;
