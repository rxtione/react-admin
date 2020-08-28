import styled from 'styled-components'

export default styled.div`
    padding: 30px 50px;
    margin-bottom: 30px;
    transition: all 0.3s ease;
    letter-spacing: 0.5px;
    border-radius: 15px;
    box-shadow: 0 0 37px rgba(8, 21, 66, 0.05);
    border: none !important;
    position: relative;
    display: flex;
    flex-direction: column;
    min-width: 0;
    background-color: #fff;
    background-clip: border-box;
    
    .equipform-input {
        max-width: 250px;
    }
    
    .equipform-select {
        display: inline;
        width: auto;
    }
    
    .btn-wrap {
        margin-top: 15px;
        text-align: center;
    }
    
    tbody tr {
        height: 41px;
    }
    
    tbody td {
        padding: 5px 10px;
        vertical-align: middle;
    }
    
    tbody th {
        padding: 5px 10px;
        background: #eee;
        vertical-align: middle;
    }
    
    input {
        font-size: 14px !important;
        height: 30px !important;
    }
    
    select {
        padding: 3px 10px !important;
        font-size: 14px !important;
        height: 30px !important;
        line-height: 1;
    }
    
`