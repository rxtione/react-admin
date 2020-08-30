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
    
    .search-wrap {
        margin-top: 30px;
        font-size: 12px;
    }
    
    .search-item {
        overflow: hidden;
        
    }
    
    .search-title {
        float: left;
        padding: 0 10px;
        width: 200px;
        height: 40px;
        background: #eee;
        border: 1px solid #ddd;
        line-height: 40px;
    }
    
    .search-content {
        float: left;
        padding: 5px 10px 0;
        width: calc(100% - 200px);
        height: 40px;
        border: 1px solid #ddd;
        line-height: 40px;
    }
    
    .equiplist-date {
        display: inline;
        max-width: 150px;
        height: 30px;
        font-size: 12px;
        line-height: 30px;
        padding: 5px 10px;
        vertical-align: top;
    }
    
    .between-date {
        display: inline-block;
        width: 30px;
        height: 30px;
        text-align: center;
        vertical-align: top;
        line-height: 30px;
    }
    
    .button-wrap {
        display: inline-block;
        padding-left: 20px;
    }
    
    Button {
        padding: 4px 12px;
        font-size: 12px;
        vertical-align: top;
    }

    select {
        display: inline-block;
        padding: 3px 10px 3px 5px !important;
        margin-right: 5px;
        width: 100px;
        height: 30px !important;
        line-height: 1;
        font-size: 12px !important;
        vertical-align: top;
    }

    .find-text {
        display: inline-block;
        padding: 3px 10px !important;
        margin: 0 5px 0 10px;
        width: 150px;
        height: 30px !important;
        line-height: 1;
        font-size: 12px !important;
        vertical-align: top;
    }

    .list-wrap {
        margin-top: 30px;
        font-size: 12px;
    }

    tr {
        height: 41px;
    }
    
    td {
        padding: 5px 10px;
        vertical-align: middle;
        line-height: 30px;
    }
    
    th {
        padding: 5px 10px;
        background: #535353;
        vertical-align: middle;
        line-height: 30px;
        color: white;
    }
`