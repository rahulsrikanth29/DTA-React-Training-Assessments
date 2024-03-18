import { useState } from "react";
import { dataServiceObj } from "C:/Users/rahsrikanth/Desktop/React 14-3-2024/my-project/src/services/data.service.js";
 
 
function AjaxDemo3() {
    const [deptsArray, setDeptsArray] = useState([]);
 
    // For reading data from user through textboxes
    const [deptno, setDeptno] = useState("");
    const [dname, setDname] = useState("");
    const [loc, setLoc] = useState("");
 
    function getDeptsButton_click() {
 
        dataServiceObj.getAllDepartments().then((resData) => {
            setDeptsArray(resData.data);
        });
    }
 
 
    function addDeptButton_click() {
        let deptObj = {};
        deptObj.deptno = deptno;
        deptObj.dname = dname;
        deptObj.loc = loc;
 
        dataServiceObj.addDept(deptObj).then((_resData) => {
            alert("New Dept added to Server");
            getDeptsButton_click(); // get the latest data from server
            clearFields();
        });
    }
 
    function clearFields() {
        setDeptno("");
        setDname("");
        setLoc("");
    }
 
 
    function deleteDept_click(dno) {
        dataServiceObj.deleteDept(dno).then((_resData) => {
            alert("Dept details are deleted from Server");
            getDeptsButton_click(); // get the latest data from server            
        });
 
    }
 
    function selectDept_click(dno) {
 
        dataServiceObj.getDeptById(dno).then((resData) => {
            let deptObj = resData.data;
            setDeptno(deptObj.deptno);
            setDname(deptObj.dname);
            setLoc(deptObj.loc);
        });
    }
 
    function updateDeptButton_click() {
        let deptObj = {};
        deptObj.deptno = deptno;
        deptObj.dname = dname;
        deptObj.loc = loc;
 
        dataServiceObj.updateDept(deptObj).then((_resData) => {
            alert("Dept details are updated in Server");
            getDeptsButton_click(); // get the latest data from server
            clearFields();
        });
    }
 
    let resultArray = deptsArray.map((item, index) => {
        return <tr key={index}>
            <td>   {item.deptno}  </td>
            <td>   {item.dname}  </td>
            <td>   {item.loc}  </td>
            <td>
                <a onClick={() => selectDept_click(item.deptno)} href="javascript:void(0);">Select</a> |
                <a onClick={() => deleteDept_click(item.deptno)} href="javascript:void(0);">Delete</a>
            </td>
        </tr>
    });
 
 
    return (<>
 
        <h3>Perform CRUD Operations using JSON-Server in React Application</h3>
        <hr />
 
        <input type="text" placeholder="Dept Number" value={deptno} onChange={(e) => setDeptno(e.target.value)} />
        <input type="text" placeholder="Dept Name" value={dname} onChange={(e) => setDname(e.target.value)} />
        <input type="text" placeholder="Dept Location" value={loc} onChange={(e) => setLoc(e.target.value)} />
        <hr />
 
        <input type="button" onClick={getDeptsButton_click} value="Get Depts" />
        <input type="button" onClick={addDeptButton_click} value="Add Dept" />
        <input type="button" onClick={updateDeptButton_click} value="Update Dept" />
        <hr />
 
        <table border="2" width="500" cellspacing="0" cellpadding="5">
            <tr>
                <th>Dept Number</th>
                <th>Dept Name</th>
                <th>Location</th>
            </tr>
            {resultArray}
        </table>
 
    </>);
}
 
export default AjaxDemo3;
