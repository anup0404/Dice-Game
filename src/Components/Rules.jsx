import React from 'react'
import { styled } from 'styled-components';

function Rules() {
  return (
    <RulesContainer>
<h2>How to play dice game</h2>
<div className="text">
<p>Select any number.</p>
<p>Click on dice image.</p>
<p>After click on  dice  if selected number is equal to dice number you will get same point as dice. </p>
<p>If you get wrong guess then  2 point will be dedcuted .</p>
</div>
    </RulesContainer>
  )
}

export default Rules

const RulesContainer=styled.div`
background-color: #FBF1F1;
margin: 0 auto;
padding: 20px;
max-width: 800px;
margin-top: 40px;
border-radius: 10px;
margin-bottom: 20px;

h2{
    font-size: 24px;
}
.text{
    margin: 24px;
    gap: 4px;
}

`;