import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import foreximg from './images/foreximg.png';
import cryptoimage from './images/cryptoimage.png';
import stockimg from './images/stockimg.png';

function AIhero() {
  return (
    <>
      <div className='d-flex justify-content-center mb-8 mt-8 pt-4 pb-4 px-5 py-5'
      style={{
        padding: "30px",
      }}
      >
      <CardGroup className='pt-10'
      style={{
        margin:'8px',
        justifyContent: "space-between",
        gap: "8px"
      }}
      >
      <Card style={{ animate: "0.8s"}}>
        <Card.Img variant="top" src={foreximg} style={{ height: "200px", backgroundClip:"black" }}/>
        <Card.Body>
          <Card.Title>Forex</Card.Title>
          <Card.Text>
          The foreign exchange market is a global decentralized or over-the-counter market
           for the trading of currencies. This market determines foreign exchange rates for 
           every currency. It includes all aspects of buying, selling and exchanging currencies
            at current or determined prices.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Trade Forex with our Smart Robots</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src={stockimg} style={{ height: "200px" }}/>
        <Card.Body>
          <Card.Title>Invest In Stocks</Card.Title>
          <Card.Text>
          In finance, stock consists of all the shares by which ownership of a
           corporation or company is divided. A single share of the stock means 
           fractional ownership of the corporation in proportion to the total 
           number of shares..{' '}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">AI models are available for Investing in Stocks</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src={cryptoimage} style={{ height: "200px" }}/>
        <Card.Body>
          <Card.Title>Binance / Crypro-Currencies</Card.Title>
          <Card.Text>
            Trade Binance with our AI models, from Bitcoin, Etherium to and grow your Finances
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Crypto</small>
        </Card.Footer>
      </Card>
    </CardGroup>
      </div>
        
    </>
    
  );
}

export default AIhero;