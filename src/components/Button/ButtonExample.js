import React from 'react';
import Button from './Button';
import './ButtonExample.css';

const ButtonExample = () => {
  return (
    <div className="button-example-container">
      <h2>Button Component Examples</h2>
      
      <div className="button-group">
        <h3>Style Variants</h3>
        <div className="button-row">
          <Button primary>Primary Button</Button>
          <Button secondary>Secondary Button</Button>
          <Button>Default Button</Button>
        </div>
      </div>

      <div className="button-group">
        <h3>Size Variants</h3>
        <div className="button-row">
          <Button primary>Regular Size</Button>
          <Button primary medium>Medium Size</Button>
        </div>
      </div>

      <div className="button-group">
        <h3>Shape Variants</h3>
        <div className="button-row">
          <Button primary>Regular Corners</Button>
          <Button primary rounded>Rounded Corners</Button>
        </div>
      </div>

      <div className="button-group">
        <h3>Border Variants</h3>
        <div className="button-row">
          <Button secondary>With Border</Button>
          <Button secondary borderless>Borderless</Button>
        </div>
      </div>

      <div className="button-group">
        <h3>Combined Styles</h3>
        <div className="button-row">
          <Button primary medium rounded>Primary + Medium + Rounded</Button>
          <Button secondary medium rounded>Secondary + Medium + Rounded</Button>
          <Button medium rounded>Default + Medium + Rounded</Button>
        </div>
      </div>
    </div>
  );
};

export default ButtonExample;
