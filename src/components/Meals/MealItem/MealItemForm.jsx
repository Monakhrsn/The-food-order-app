const MealItemForm = () => {
    return (
        <div>
            <div>
                <span style={{fontWeight: 'bold', marginTop:'1rem'}}>Amount</span>
                <input type="number" style={{height:'1.5rem', marginTop: '1rem'}}/>
            </div>
            <button>+Add</button>
        </div>
    )
}

export default MealItemForm;