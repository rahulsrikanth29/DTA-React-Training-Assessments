import { useState } from "react";
import { dataServiceObj } from "C:/Users/rahsrikanth/Desktop/React 14-3-2024/my-project/src/services/data.service.js";
 
 
function AjaxDemo4() {
    const [empsArray, setEmpsArray] = useState([]);
 
    // For reading data from user through textboxes
    const [empno, setEmpno] = useState("");
    const [ename, setEname] = useState("");
    const [job, setJob] = useState("");
    const [sal, setSal] = useState("");
    const [deptno, setDeptno] = useState("");
 
    function getEmpsButton_click() {
 
        dataServiceObj.getAllEmployees().then((resData) => {
            setEmpsArray(resData.data);
        });
    }
 
 
    function addEmpButton_click() {
        let empObj = {};
        empObj.empno = empno;
        empObj.ename = ename;
        empObj.job = job;
        empObj.sal = sal;
        empObj.deptno = deptno;
 
        dataServiceObj.addEmp(empObj).then((resData) => {
            alert("New Employee is Added to Server");
            getEmpsButton_click(); // get the latest data from server
            clearFields();
        });
    }
 
    function clearFields() {
        setEmpno("");
        setEname("");
        setJob("");
        setSal("");
        setDeptno("");
    }
 
 
    function deleteEmp_click(eno) {
        dataServiceObj.deleteEmp(eno).then((resData) => {
            alert("Employee Details are Deleted from Server");
            getEmpsButton_click(); // get the latest data from server            
        });
 
    }
 
    function selectEmp_click(eno) {
 
        dataServiceObj.getEmpById(eno).then((resData) => {
            let empObj = resData.data;
            setEmpno(empObj.empno);
            setEname(empObj.ename);
            setJob(empObj.job);
            setSal(empObj.sal);
            setDeptno(empObj.deptno);
        });
    }
 
    function updateEmpButton_click() {
        let empObj = {};
        empObj.empno = empno;
        empObj.ename = ename;
        empObj.job = job;
        empObj.sal = sal;
        empObj.deptno = deptno;
 
        dataServiceObj.updateEmp(empObj).then((resData) => {
            alert("Employee Details are Updated in Server");
            getEmpsButton_click(); // get the latest data from server
            clearFields();
        });
    }
 
    let resultArray = empsArray.map((item, index) => {
        return <tr key={index}>
            <td>   {item.empno}  </td>
            <td>   {item.ename}  </td>
            <td>   {item.job}  </td>
            <td>   {item.sal}  </td>
            <td>   {item.deptno}  </td>
            <td>
                <a onClick={() => selectEmp_click(item.empno)} href="javascript:void(0);">Select</a> |
                <a onClick={() => deleteEmp_click(item.empno)} href="javascript:void(0);">Delete</a>
            </td>
        </tr>
    });
 
 
    return (<>
 
        <h3>Perform CRUD Operations using JSON-Server in React Application</h3>
        <hr />
 
        <input type="text" placeholder="Employee Number" value={empno} onChange={(e) => setEmpno(e.target.value)} />
        <input type="text" placeholder="Employee Name" value={ename} onChange={(e) => setEname(e.target.value)} />
        <input type="text" placeholder="Job" value={job} onChange={(e) => setJob(e.target.value)} />
        <input type="text" placeholder="Salary" value={sal} onChange={(e) => setSal(e.target.value)} />
        <input type="text" placeholder="Dept Number" value={deptno} onChange={(e) => setDeptno(e.target.value)} />
        <hr />
 
        <input type="button" onClick={getEmpsButton_click} value="Get Employee Detials" />
        <input type="button" onClick={addEmpButton_click} value="Add Employee" />
        <input type="button" onClick={updateEmpButton_click} value="Update Employee Details" />
        <hr />
 
        <table border="2" width="500" cellspacing="0" cellpadding="5">
            <tr>
                <th>Emp Number</th>
                <th>Emp Name</th>
                <th>Job</th>
                <th>Salary</th>
                <th>Dept Number</th>
            </tr>
            {resultArray}
        </table>
 
    </>);
}
 
export default AjaxDemo4;
