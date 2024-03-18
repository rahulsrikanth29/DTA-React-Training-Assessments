import axios from 'axios';

/*export let dataSericeObj = 
{
    getAllCustomers
};


function getAllCustomers()
{
    
    let url = "https://www.w3schools.com/angular/customers.php";
    return axios.get(url);
}*/


/*
export let dataServiceObj = 
{
    getAllDepartments,
    getDeptById,
    addDept,
    updateDept,
    deleteDept
};



let url = "http://localhost:3000/depts/";

function getAllDepartments()
{
    return axios.get(url);
}


function addDept(deptObj)
{
    return axios.post(url, deptObj);
}

function deleteDept(dno)
{
    return axios.delete(url + dno);
}


function getDeptById(dno)
{
    return axios.get(url + dno);
}

function updateDept(deptObj)
{
    return axios.put(url + deptObj.deptno, deptObj);
}
*/

 
export let dataServiceObj =
{
    getAllEmployees,
    getEmpById,
    addEmp,
    updateEmp,
    deleteEmp
};
 
 
 
let url = "http://localhost:3000/emps/";
 
function getAllEmployees()
{
    return axios.get(url);
}
 
 
function addEmp(empObj)
{
    return axios.post(url, empObj);
}
 
function deleteEmp(eno)
{
    return axios.delete(url + eno);
}
 
 
function getEmpById(eno)
{
    return axios.get(url + eno);
}
 
function updateEmp(empObj)
{
    return axios.put(url + empObj.empno, empObj);
}
