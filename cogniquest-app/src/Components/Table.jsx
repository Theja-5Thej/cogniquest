import React from 'react'
import {Table, Thead,Tbody} from './Styledcomponents/styledcomponents'
const tableData = [
    [
        ["Visvesvaraya Technological University, Belagavi Scheme of Teaching and Examinations-2022  Outcome-Based Education(OBE)and Choice Based Credit System(CBCS) (Effective from the academic year 2022-23)", 1, 14,],],
        [["I Semester (CSE Streams) (Physics Group)", 1, 14]],
        [["Sl. No", 3, 1], ["Course andCourseCode", 3, 2],["Course Title", 3, 1],["TD/PSB", 3, 1],
        ["Teaching Hours/Week", 1, 4],
        ["Examination", 1, 4],
        ["Credits", 3, 1],
        ],
        [
            ["Theory Lecture", 1, 1],
            ["Tutorial", 1, 1],
            ["Practical/ Drawing", 1, 1],
            ["SDA", 1, 1],
            ["hours Duration in", 2, 1],
            ["CIE Marks", 2, 1],
            ["SEE Marks", 2, 1],
            ["Total Marks", 2, 1],
        ],
        [
            ["L", 1, 1],
            ["T", 1, 1],
            ["P", 1, 1],
            ["S", 1, 1],
        ],
        [
            ["1", 1, 1],
            ["*ASC(IC)", 1, 1],
            ["22MATS11", 1, 1],
            ["Mathematics for CSE Stream-I", 1, 1],
            ["Maths", 1, 1],
            ["2", 1, 1],
            ["2", 1, 1],
            ["2", 1, 1],
            ["0", 1, 1],
            ["03", 1, 1],
            ["50", 1, 1],
            ["50", 1, 1],
            ["100", 1, 1],
            ["04", 1, 1],
        ],
        [
            ["2", 1, 1],
            ["#ASC(IC)", 1, 1],
            ["22PHYS12", 1, 1],
            ["Physics for CSE stream", 1, 1],
            ["Physics", 1, 1],
            ["2", 1, 1],
            ["2", 1, 1],
            ["2", 1, 1],
            ["0", 1, 1],
            ["03+02", 1, 1],
            ["50", 1, 1],
            ["50", 1, 1],
            ["100", 1, 1],
            ["04", 1, 1],
        ]
];

const TableData = () => {

  return (
    <>
    {console.log(tableData[1][0][0])}
    <Table >
        <Thead ><tr><th>{tableData[0][0][0]}</th></tr></Thead>
        <Tbody><tr><td >{tableData[1][0][0]}</td></tr></Tbody>
    </Table>
   
    </>
  )
}

export default TableData
