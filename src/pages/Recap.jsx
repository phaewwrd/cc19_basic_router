
function Recap() {
    const obj = {
        firstName: 'Phaew',
        lastName: 'Wrd'
    }
    obj.address = 'BKK'
    const obj2 = {
        street: '222',
        zipcode: '12312'
    }
    const mergrObj = { ...obj, ...obj2 }
    console.log(mergrObj);


    const arr = ['PP', 'WWW']
    console.log(arr);

    arr[2] = 'bkk'
    const arr2 = ['123', '4444']
    const mergeArr = [...arr, ...arr2]
    console.log(mergeArr);

    const products = [
        {id: 1, title: 'ASUS', price: 4000},
        {id: 2, title: 'MSI', price: 3000},
        
    ]
    console.log(products[1].title);

    const newProduct ={
        id:3,
        title: 'Lenove',
        price: 2000
    }

    const mergeProduct = [...products,{...newProduct}]
    console.log(mergeProduct);
    console.log('mergeProduct', mergeProduct)

    return (
        <div>Easy, Zustand</div>
    )
}

export default Recap