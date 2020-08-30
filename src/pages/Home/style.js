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
        padding: 0 10px;
        width: calc(100% - 200px);
        height: 40px;
        border: 1px solid #ddd;
        line-height: 40px;
    }
    
    .equiplist-date {
        display: inline;
        max-width: 150px;
        height: 30px;
        font-size: 14px;
        line-height: 30px;
        padding: 5px 10px;
    }
    
    .between-date {
        display:inline-block;
        width: 30px;
        text-align: center;
    }
    
    .button-wrap {
        display: inline-block;
        padding-left: 20px;
    }
    
    .button-wrap Button {
        padding: 4px 12px;
        font-size: 12px;
    }
`