import './items.css';

const arrayList =
    ['List Item 1', 'List Item 2', 'List Item 3'];

export const Items = () => {
    const arrayListComponents = [];

    const handleClick = (item) => {
        console.log(`You clicked on ${item}`);
    };

    arrayList.forEach(
        (item, index) => {
            arrayListComponents.push(
                <div key={index} className="item" onClick={() => handleClick(item)}>
                    {item}
                </div>
            );
        }
    );
    return <div>{arrayListComponents}</div>;
};
