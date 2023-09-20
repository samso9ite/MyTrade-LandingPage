import rawCountries from '../countries.json'
import {useState, useEffect} from 'react'
import CurrencyFormatter from '../CurrencyFormatter'

const RateCalculator = () => {
    const [cardRate, setCardRate] = useState([])
    const [countrySelected, setCountrySelected] = useState({})
    const [assetSelected, setAssetSelected] = useState({})
    const [rateValue, setRateValue] = useState(0)
    const [cardTypes, setCardTypes] = useState([])
    const [countries, setCountries] = useState([])
    const [selectedCardType, setSelectedCardType] = useState([])
    const [cardValue, setCardValue] = useState('')
    const [message, setMessage] = useState('')
    const [cards, setCards] = useState([])

    useEffect(() => {
        fetch('http://localhost:8080/api/v1/card/all')
        .then(res => res.json())
        .then(data => 
            setCards(data.data)
        ).catch(err => {console.log(err);})
    })

     // Mapping through Asset for select option
     const getAssetHandler = () => {
        return cards.map((asset) => {
            if(asset.status === 'Available'){
             return  <option key={asset._id} value={asset._id}>{asset.name}</option>}
            }
        )
    } 

    // Find Country Currency Handler
    const findCountryCurrency = (country) => {
        const countryCurrency = rawCountries.find(c => c.name === country)
        return countryCurrency.currency
    }
    
    // Removing country duplicates
    const getDistinctCountries = (countryArr) => {
        const uniqueCountries = countryArr.filter((thing, index, self) => index ===
            self.findIndex(t=>t.country === thing.country && t.currency === thing.currency)
        )
        return uniqueCountries
    } 

    // This set a new value when a new digital asset is selected
    const assetChangeHandler = (event) => {
        setRateValue(0)
        const selected = event.target.value

        // Find the selected object from the options array
        const selectedObject = cards.find((option) => option._id === selected);
        setAssetSelected(selectedObject)
        setCardRate(selectedObject.rates)
        setCardTypes([])
        setCountrySelected([])
        setSelectedCardType([])
        setCardValue('')
        let cardArray = []
        let countryArr = []
        selectedObject.rates.forEach(rate => {
            const currency = findCountryCurrency(rate.country)
            rate.currency = currency;       
            if (!cardArray.includes(rate.cardType)) {
                cardArray.push(rate.cardType)
            }
            countryArr.push({ country: rate.country, currency });
        })
        countryArr = getDistinctCountries(countryArr)
        setCardTypes(prevState => [...prevState, ...cardArray])
        setCountries([])        
        setCountries(prevState => [...prevState, ...countryArr])
    } 
  
    // Map through a list of rates for a selected digital asset
    const cardTypesHandler = () => {
        return cardTypes?.map((cardType) => {
            return <option  value={cardType}>{cardType}</option>
        })
    } 

    // Set cardType on user select
    const selectCardTypeHandler = (event) => {
        setSelectedCardType(event.target.value)
    }
    // Map through a list of rates for a selected digital asset
    const countryListHandler = () => {
        return countries?.map((country) => {
            return <option value={country.country}>{country.country}-{country.currency}</option>
        })
    } 
    // Set country on selected country
    const countryChangeHandler = (event) => {
        setCountrySelected(event.target.value)
    }

    /** This section calculates the rate of the value */     
    const between = (x, range) => {
        const [min, max] = range.split('-').map(val => parseInt(val))
        return x >= min && x <= max
    }

    const isRateAvailable = (amount) => {
        cardRate.forEach(rate => {
            setMessage('')
            const isBetween = between(amount, rate.denomination);
            if(isBetween){
                setRateValue(rate.rate)
            }else{
                setMessage("Value is between" + rate.denomination)
                setRateValue(0)
            }
        })
    }

    const getRateHandler = (event) => {
        setCardValue(event.target.value)
        isRateAvailable(event.target.value)
    }
    // This calculates the payout amount
    const getAmountHandler = () => {
        let payoutCalc = cardValue * rateValue
        return payoutCalc
    }
    /** End of rate calculation functions */
 
    return(
        <>
            <section id="portfolio" class="portfolio-area portfolio-four" style={{backgroundColor: "#124990"}}>
                <div class="container">
                    <div class="row">
                        <div class="col-md-6 order-2 delay-3m" data-aos="fade-left" data-aos-easing="linear" data-aos-duration="500" style={{backgroundColor: '#fff', padding:'4%', borderRadius: '10px'}}>
                            <div class="center-card">
                                <section class="card_transaction">
                                    <div class="wrappers">
                                        <div class="card-wrap">
                                            <div class="header-top">
                                                <img src="assets/images/png/calculator.png" class="img-responsive img-cal" alt="calculator" />

                                                <div class="ml-3">
                                                    <h4>Rate Calculator</h4>
                                                    <p>Get card currency equivalent in naira</p>
                                                </div>
                                            </div>

                                            <div style={{marginTop: '40px'}}>
                                                <form class="mt-4">
                                                    <div class="input bordered">
                                                    {/* <label class="form-label">Select Digital Asset</label> */}
                                                    <select className="form-control"  value={assetSelected._id} onChange={assetChangeHandler}>
                                                        <option value="" disabled>-- Choose an asset -- </option>
                                                        {getAssetHandler()}
                                                    </select>
                                                    </div>

                                                    <div class="mt-3">
                                                    {/* <label>Card Type</label> */}
                                                    <select className="form-control"  value={selectedCardType} onChange={selectCardTypeHandler}>
                                                        <option value="">-- Choose card type -- </option>
                                                        {cardTypesHandler()}
                                                    </select>

                                                    </div>

                                                    <div class="mt-3">
                                                    {/* <label>Select Country / Currency</label> */}
                                                    <select className="form-control"  value={countrySelected} onChange={countryChangeHandler}>
                                                        <option value="">-- Select Country -- </option>
                                                        {countryListHandler()}
                                                    </select>

                                                    </div>

                                                    <div class="mt-3">
                                                        <input id="crud-form-1" type="number" className="form-control w-full" placeholder="What's the value of the card" value={cardValue} onChange={getRateHandler}/>
                                                    </div>

                                                    <div class="mt-4">
                                                    {message && <h4 style={{color:'red', fontSize: "20px", fontWeight: "400"}}> {message} </h4>}
                                                    { !message &&
                                                        <h3 style={{fontSize: "20px", fontWeight: "500"}}> Rate: <CurrencyFormatter value={rateValue} currencycode="NGN" /> </h3>}
                                                    { !message &&    
                                                        <h3 style={{fontSize: "20px", fontWeight: "500", marginTop:'10px'}}> Payout: <CurrencyFormatter value={getAmountHandler()}  currencycode="NGN" /></h3>
                                                    }

                                                    <button type="submit" class="btn btn-primary mt-4 btn-md">Confirm & Proceed</button> 
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div> 

                        <div class="col-md-6 order-1 mb-3 justify-content-center animate__animated  animate__fadeIn delay-2m" style={{alignSelf: 'center'}}>
                            <div class="align-items-center">
                                <div class="section-title text-center pb-10" style={{verticalAlign: 'middle', color: '#fff'}}>
                                    <h3 class="title" style={{color: '#fff'}}>Check Out Our Rates</h3>

                                    <p class="text" style={{color: '#fff'}}>
                                        We offer you the very best rates, which changes dynamically as market prices vary. You have the flexibility to choose from a variety of our different cards and their different prices.
                                    </p>

                                    <p class="text" style={{color: '#fff'}}>
                                        <strong>Please note: </strong> Our prices are not fixed to these rates, as they change based on market ranges.
                                    </p>
                                </div> 
                            </div>
                        </div> 
                    </div>
                </div> 
            </section>
        </>
    )
}

export default RateCalculator