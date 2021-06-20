import React from "react";
import { Breadcrumb } from "antd";
const BreakCrump = ({ arrOfStr }) => {
    return (
        <Breadcrumb style={{ margin: '16px 32px' }}>
            {arrOfStr.map((str, indx) => (
                <Breadcrumb.Item key={indx}>{str}</Breadcrumb.Item>
            ))}
        </Breadcrumb>
    );
}

export default BreakCrump;