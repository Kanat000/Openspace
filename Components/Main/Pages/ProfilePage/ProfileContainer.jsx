import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import FreelanceResult from "../FreelancePage/FreelanceResultBlocks/Freelance_results";
import Product from "../StorePage/Product/Product";
import ProjectResult from "../ProjectsPage/ProjectResultBlock/Project_result";
import {ImageUrlOf} from "../../ImageConverter";
import {withRouter} from "react-router-dom";


let mapStateToProps = (state) => {
  let mainInfo = state.ProfilePage.MainInfo;
  let publishes = state.ProfilePage.Publishes;
  let orders = publishes.Orders.map(function (elem) {
    return <FreelanceResult info = {elem} />;
  });
  let products = publishes.Products.map(function (elem) {
    return <Product info = {elem} ImageUrlOf={ImageUrlOf}/>;
  });
  let projects = publishes.Projects.map(function (elem){
    return <ProjectResult info = {elem} ImageUrlOf={ImageUrlOf}/>
  });
  return {
    Name : mainInfo.Name,
    Surname: mainInfo.Surname,
    Login: mainInfo.Login,
    University: mainInfo.University,
    City: mainInfo.City,
    Societies: {
      instagram: mainInfo.Societies.instagram,
      telegram: mainInfo.Societies.telegram,
      whatsapp: mainInfo.Societies.whatsapp
    },
    Orders: orders,
    Products: products,
    Projects: projects
  };
}

const ProfileContainer = connect(mapStateToProps)(Profile);
export const ProfileWithRouter = withRouter(ProfileContainer);
export default ProfileContainer;