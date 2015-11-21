# React-Picker

Picker Component offers a popup options list with responsive layouts.


## Installation

	npm install react-picker --save
	
## Snapshots

![PC WEB](http://pub.lvrian.com/react-picker/snapshots/pc-picker.jpg "PC Browser View")

![Mobile WEB](http://pub.lvrian.com/react-picker/snapshots/mobile-picker.jpg "Mobile Browser View")

## Demo

[Online Demo](http://pub.lvrian.com/react-picker/demo.html)

Demo file in repository: ./examples/demo.html

## Example

./examples/demo.jsx

#### Import component into your react project

```
import Picker from 'react-picker'
```

```
<ul>
	<li>
		<label>Choice X</label>
		<div className="edit">
			<Picker
				ref="fruitSelection"
				value={fruit}
				options={['Mango', 'Orange', 'Avocado', 'Pineapple', 'Jack Fruit', 'Durian', 'Apricot', 'Carambola', 'Dateplum Persimmon', 'Megranate']}
				onChange={this._handleFruitChange}
				>
				<OptionBox value={fruit} onClick={this._handleClickFruit} />
			</Picker>
		</div>
	</li>
	<li>
		<label>Choice Y</label>
		<div className="edit">
			<Picker
				ref="carSelection"
				value={[brand, serial]}
				options={[this.state.brands, this.state.series]}
				onChange={this._handleCarChange}
				width="600px"
				>
				<OptionBox value={this.getCarText(brand, serial)} onClick={this._handleClickCar} />
			</Picker>
		</div>
	</li>
</ul>
```

OptionBox is a customized component defined for the demo.


#### Import CSS/SCSS

Then, import css/picker.css, or scss/picker.scss if you are suing SCSS, into your project.


## License

[MIT](http://www.opensource.org/licenses/mit-license.php)