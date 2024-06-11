import React, { useEffect, useState } from 'react';
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Button from "components/CustomButtons/Button.js";
import { Link, useParams } from 'react-router-dom/cjs/react-router-dom.min'
import dashboardRoutes from 'routes'
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import Switch from '@material-ui/core/Switch';
import CardFooter from 'components/Card/CardFooter';
import { apiaddress } from 'auth/apiaddress';
import { postData } from 'auth/datapost';
import { hashit } from 'auth/datapost';
import Swal from 'sweetalert2';
const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  }
};
const useStyles = makeStyles(styles);

function Setpermissions() {
const[state,setState] = useState({
  view:false,dashboard:false,departmentondashboard:false,dashboardreport:false,todaydetail:false,
  MarkAttendance:false,RandomAttendance:false,MarkAttendancebydate:false,ViewAttendance:false,
  Reports:false,studentreport:false,classreport:false,departmentreport:false,warningletters:false,
  Fines:false,classFines:false,Finedetail:false,departmentFines:false,Classes_Sections:false,
  Classes:false,Sections:false,Departments:false,Shifts:false,Students:false,addstudent:false,
  modifystudent:false,Modifystu:false,deletestudent:false,promotestudents:false,Users:false,
  adduser:false,setemployeepermissions:false,modifyuser:false,modifyuserform:false,setpermissions:false,
  deleteuser:false,assignclasses:false,blockeddates:false,createsessions:false,logs:false,morning:false,evening:false
})

const {employee_number,employee_full_name,employee_mobile_number,father_full_name,father_mobile_number,joining_date,email,cnic,password} = useParams()


const handleChange = async (e) => {
  const { name, checked } = e.target;
    setState(prevState => ({
      ...prevState,
      [name]: checked
    }));

}


const submitdata = async (props) => {

let permissionsarray = []
dashboardRoutes.map((route) => {

    if (state[route.rtlName] === true) {
        permissionsarray.push(route.rtlName)
    }
    return null; // Map function expects a return value for each element
});
const password2 = hashit(password)
const password3 = hashit(employee_number,password2)
let userdata = {employee_number,employee_full_name,employee_mobile_number,father_full_name,father_mobile_number,joining_date,email,cnic,password:password2,emp_token:password3}
const resp = await postData(apiaddress+'/add-user',{userdata,permissionsarray})
if(resp.error === true){
  Swal.fire({
    title: 'User Already Exist!',
    text: 'Do you want to continue',
    icon: 'warning',
    confirmButtonText: 'OK'
  })
}else{
  Swal.fire({
    title: 'User Added Successfully!',
    text: 'Do you want to continue',
    icon: 'success',
    confirmButtonText: 'OK'
  })
  setTimeout(() => {
    window.location.href = '/admin/adduser';
  }, 1000);

}
}

const superUser = async (e) => {
if(e.target.checked){
  setState({
    view:true,dashboard:true,departmentondashboard:true,dashboardreport:true,todaydetail:true,
    MarkAttendance:true,RandomAttendance:true,MarkAttendancebydate:true,ViewAttendance:true,
    Reports:true,studentreport:true,classreport:true,departmentreport:true,warningletters:true,
    Fines:true,classFines:true,Finedetail:true,departmentFines:true,Classes_Sections:true,
    Classes:true,Sections:true,Departments:true,Shifts:true,Students:true,addstudent:true,
    modifystudent:true,Modifystu:true,deletestudent:true,promotestudents:true,Users:true,
    adduser:true,setemployeepermissions:true,modifyuser:true,modifyuserform:true,setpermissions:true,
    deleteuser:true,assignclasses:true,blockeddates:true,createsessions:true,logs:true,morning:true,evening:false
  })
}else{
  setState({
    view:false,dashboard:false,departmentondashboard:false,dashboardreport:false,todaydetail:false,
    MarkAttendance:false,RandomAttendance:false,MarkAttendancebydate:false,ViewAttendance:false,
    Reports:false,studentreport:false,classreport:false,departmentreport:false,warningletters:false,
    Fines:false,classFines:false,Finedetail:false,departmentFines:false,Classes_Sections:false,
    Classes:false,Sections:false,Departments:false,Shifts:false,Students:false,addstudent:false,
    modifystudent:false,Modifystu:false,deletestudent:false,promotestudents:false,Users:false,
    adduser:false,setemployeepermissions:false,modifyuser:false,modifyuserform:false,setpermissions:false,
    deleteuser:false,assignclasses:false,blockeddates:false,createsessions:false,logs:false,morning:false,evening:false
  })
}
}
const cO = async (e) => {
  if(e.target.checked){
    setState({
      view:true,dashboard:true,departmentondashboard:false,dashboardreport:false,todaydetail:true,
      MarkAttendance:true,RandomAttendance:true,MarkAttendancebydate:true,ViewAttendance:true,
      Reports:true,studentreport:true,classreport:true,departmentreport:false,warningletters:true,
      Fines:true,classFines:true,Finedetail:true,departmentFines:false,Classes_Sections:false,
      Classes:false,Sections:false,Departments:false,Shifts:false,Students:true,addstudent:true,
      modifystudent:true,Modifystu:true,deletestudent:true,promotestudents:false,Users:false,
      adduser:false,setemployeepermissions:false,modifyuser:false,modifyuserform:false,setpermissions:false,
      deleteuser:false,assignclasses:false,blockeddates:false,createsessions:false,logs:false,morning:true,evening:false
    })
  }else{
    setState({
      view:false,dashboard:false,departmentondashboard:false,dashboardreport:false,todaydetail:false,
      MarkAttendance:false,RandomAttendance:false,MarkAttendancebydate:false,ViewAttendance:false,
      Reports:false,studentreport:false,classreport:false,departmentreport:false,warningletters:false,
      Fines:false,classFines:false,Finedetail:false,departmentFines:false,Classes_Sections:false,
      Classes:false,Sections:false,Departments:false,Shifts:false,Students:false,addstudent:false,
      modifystudent:false,Modifystu:false,deletestudent:false,promotestudents:false,Users:false,
      adduser:false,setemployeepermissions:false,modifyuser:false,modifyuserform:false,setpermissions:false,
      deleteuser:false,assignclasses:false,blockeddates:false,createsessions:false,logs:false,morning:false,evening:false
    })
  }
}
const aCO = async (e) => {
  if(e.target.checked){
    setState({
      view:true,dashboard:true,departmentondashboard:false,dashboardreport:false,todaydetail:true,
      MarkAttendance:true,RandomAttendance:true,MarkAttendancebydate:false,ViewAttendance:true,
      Reports:true,studentreport:true,classreport:true,departmentreport:false,warningletters:true,
      Fines:true,classFines:true,Finedetail:true,departmentFines:false,Classes_Sections:false,
      Classes:false,Sections:false,Departments:false,Shifts:false,Students:false,addstudent:false,
      modifystudent:false,Modifystu:false,deletestudent:false,promotestudents:false,Users:false,
      adduser:false,setemployeepermissions:false,modifyuser:false,modifyuserform:false,setpermissions:false,
      deleteuser:false,assignclasses:false,blockeddates:false,createsessions:false,logs:false,morning:true,evening:false
    })
  }else{
    setState({
      view:false,dashboard:false,departmentondashboard:false,dashboardreport:false,todaydetail:false,
      MarkAttendance:false,RandomAttendance:false,MarkAttendancebydate:false,ViewAttendance:false,
      Reports:false,studentreport:false,classreport:false,departmentreport:false,warningletters:false,
      Fines:false,classFines:false,Finedetail:false,departmentFines:false,Classes_Sections:false,
      Classes:false,Sections:false,Departments:false,Shifts:false,Students:false,addstudent:false,
      modifystudent:false,Modifystu:false,deletestudent:false,promotestudents:false,Users:false,
      adduser:false,setemployeepermissions:false,modifyuser:false,modifyuserform:false,setpermissions:false,
      deleteuser:false,assignclasses:false,blockeddates:false,createsessions:false,logs:false,morning:false,evening:false
    })
  }
}


return (
<GridContainer justify="center" alignItems="center" spacing={1}>
<GridItem xs={12} sm={12} md={12}>   
<Card>
<CardHeader color="primary">
    <h3>Set Employee Permissions</h3>
</CardHeader>
<CardBody>
<GridContainer justify="center" alignItems="center" spacing={1}>
    <GridItem xs={12} sm={6} md={4}>
    <Card>

      <CardHeader color="info">
      <h6>Configure as Super User</h6>
      
                <label  className="switch">
                <input onClick={superUser} id='superUser' type= "checkbox"/>
                <span className="slider round"></span>
                </label>

      </CardHeader>
    </Card>

    </GridItem>
    <GridItem xs={12} sm={6} md={4}>
    <Card>

    <CardHeader color="info">
      <h6>Configure as Course Officer</h6>
      <label  className="switch">
                <input onClick={cO} id='co' type= "checkbox"/>
                <span className="slider round"></span>
                </label>
      </CardHeader>
    </Card>

    </GridItem>
    <GridItem xs={12} sm={6} md={4}>
    <Card>

    <CardHeader color="info">
      <h6>Configure as Assistant Course Officer</h6>
      <label  className="switch">
                <input onClick={aCO} id='aco' type= "checkbox"/>
                <span className="slider round"></span>
                </label>
      </CardHeader>
    </Card>

    </GridItem>
</GridContainer>
<GridContainer justify="center" alignItems="center" spacing={1}>

      {dashboardRoutes.map((route)=>(
        

        <GridItem xs={12} sm={6} md={4}>
            <Card>

                <CardBody>
        <h6>{route.name}</h6>

        <label  className="switch">
        <input onClick={handleChange} id={route.rtlName} name={route.rtlName} checked = {state[route.rtlName]} type= "checkbox"/>
        <span className="slider round"></span>
        </label>

                </CardBody>
            </Card>
       
        </GridItem>
        
        
        
      ))}

</GridContainer>
</CardBody>
<CardFooter>

<Button onClick = {submitdata} color="primary">Submit Details</Button>

</CardFooter>
</Card>
</GridItem>
</GridContainer>
  )
}

export default Setpermissions
