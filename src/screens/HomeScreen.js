import { Container } from 'react-bootstrap';

function HomeScreen() {


 

  return (
    <Container>
      <div>
        <h1>About</h1>
        <p class="devInfo__about">
          Whether you're an amateur or professional trader, market direction can
          sometimes be confusing. You might find yourself second-guessing your
          decisions, stubbornly holding onto a position despite contrary
          evidence, or convinced that a market reversal is imminent because you
          believe it has peaked or bottomed out. What’s really going on?{' '}
        </p>

        <p class="devInfo__about">
          At TradePRO, we provide powerful tools that offer in-depth analysis
          and potential predictions for the next 4 hours, helping you trade with
          greater confidence. Our machine learning-powered tools analyse
          historical market patterns and market reactions to news. With these
          insights, you’ll know when to secure profits, cut losses, and prepare
          for your next trade.
        </p>


        <p class="devInfo__about">How the tools will improve your trade:</p>


        <ul class="list_indent">
          <li class="devInfo__about">
            Trade less frequently to ensure profitability, as frequent trading
            often leads to losses due to emotional decision-making, spread
            costs, and market volatility that typically work against you.
          </li>
          <li class="devInfo__about">
            Offers entry and exit points, along with realistic target levels, to
            help you develop a solid trading strategy—many amateur traders enter
            positions without a clear plan.
          </li>
          <li class="devInfo__about">
            Minimizes uncertainty by simplifying market analysis, as technical
            charts can be overwhelming due to conflicting signals.
          </li>
        </ul>


        <h2>Trader's Mindset</h2>
        
        <p class="devInfo__about">
          For valuable insights into developing a strong trader's 
          mindset,  <a href="/trademindset">click here</a>. Understanding what drives both 
          successful and unsuccessful trades is crucial. With the right mindset, 
          you'll be better equipped to make informed decisions. Remember, even with 
          the best tools at your disposal, the wrong mindset can still lead to losses.
        </p>


        <h2>Tools Information</h2>
        <p>
          The main tools provide insights into the direction of trade for the
          next 4 hours. There are three versions of the models, trained on key
          parameters listed below. Two models provide 4-hour predictions, each
          trained using slight variations of the data, and the remaining model
          provides a 1-hour prediction. It has been found that combining the
          results of these models increases confidence when there is consistency
          among the predictions.{' '}
        </p>

        <ul class="list_indent">
          <li>MA20, MA50, MA100</li>
          <li>Bollinger Band</li>
          <li>market trend strength</li>
        </ul>
      </div>
    </Container>
  );
}

export default HomeScreen