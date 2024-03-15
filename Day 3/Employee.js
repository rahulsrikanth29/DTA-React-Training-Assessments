import { useState } from "react";


function Emp() {
    const [empArray, setEmpArray] = useState([]);

    const [deptno, setDeptno] = useState("");
    const [empno, setEmpno] = useState("");
    const [ename, setEname] = useState("");
    const [job, setJob] = useState("");
    const [sal, setSal] = useState("");



    function getDeptsButton_click() {

        let tA = [
            { deptno: 101, empno: 1, ename: "Rahul", job: "Manager", sal: 25000 },
            { deptno: 102, empno: 2, ename: "Tharun", job: "Deputy Manager", sal: 24999 },
        ];

        setEmpArray(tA);

    }


    function addDeptButton_click() {
        let deptObj = {};
        deptObj.deptno = deptno;
        deptObj.empno = empno;
        deptObj.ename = ename;
        deptObj.job = job;
        deptObj.sal = sal;


        let tempArray = [...empArray];
        tempArray.push(deptObj);
        setEmpArray(tempArray);

        clearFields();
    }

    function clearFields() {
        setDeptno("");
        setEmpno("");
        setEname("");
        setJob("");
        setSal("");
    }


    function deleteEmp_click(dno) {
        let tempArray = [...empArray];

        let index = tempArray.findIndex(item => item.deptno == dno);
        const confirmed = window.confirm("Are you sure you want to delete?");
        if (confirmed) {
            tempArray.splice(index, 1);

            setEmpArray(tempArray);
        }

    }

    function selectEmp_click(dno) {
        let deptObj = empArray.find(item => item.deptno == dno);

        setDeptno(deptObj.deptno);
        setEmpno(deptObj.empno);
        setEname(deptObj.dname);
        setJob(deptObj.job);
        setSal(deptObj.sal);
    }

    function updateDeptButton_click() {
        let tempArray = [...empArray];

        let index = tempArray.findIndex(item => item.deptno == deptno);
        tempArray[index].empno = empno;
        tempArray[index].ename = ename;
        tempArray[index].job = job;
        tempArray[index].sal = sal;

        setEmpArray(tempArray);
        clearFields();
    }

    let resultArray = empArray.map((item, index) => {
        return <tr key={index}>
            <td>   {item.empno}  </td>
            <td>   {item.ename}  </td>
            <td>   {item.deptno}  </td>
            <td>   {item.job}  </td>
            <td>   {item.sal}  </td>
            <td>
                <button onClick={() => selectEmp_click(item.deptno)}>
                    <img height="30" width="80" src="https://upload.wikimedia.org/wikipedia/en/thumb/4/41/SELECT_logo.svg/2560px-SELECT_logo.svg.png"></img>
                </button>
                <button onClick={() => deleteEmp_click(item.deptno)} >
                    <img height="30" width="80" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCHVPhzxvvIZJ9ysTbrUqzeZCwBJrBAUgNOA&usqp=CAU"></img>
                </button>
            </td>
        </tr>
    });


    return (<>

        <h3>Employee CRUD Operations </h3>
        <hr />

        <input type="text" placeholder="Employee Number" value={empno}   onChange={(e) => setEmpno(e.target.value)}  />
        <input type="text" placeholder="Employee Name"   value={ename}   onChange={(e) => setEname(e.target.value)}  />
        <input type="text" placeholder="Dept Number"     value={deptno}  onChange={(e) => setDeptno(e.target.value)} />
        <input type="text" placeholder="Job"             value={job}     onChange={(e) => setJob(e.target.value)}    />
        <input type="text" placeholder="Salary"          value={sal}     onChange={(e) => setSal(e.target.value)}    />
        <hr />

        <input type="button" onClick={getDeptsButton_click}    value="Show Details"    />
        <input type="button" onClick={addDeptButton_click}     value="Add Employee"    />
        <input type="button" onClick={updateDeptButton_click}  value="Update Employee" />

        <hr />

        <table border="2" width="500" cellspacing="0" cellpadding="5">
            <tr>
                <th>Employee Number</th>
                <th>Employee Name</th>
                <th>Department Number</th>
                <th>Job</th>
                <th>Salary</th>

                <th></th>
            </tr>
            {resultArray}
        </table>

    </>
    );
}

export default Emp;