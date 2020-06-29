class Tag {
    constructor(name = '', text = '') {
        this.name = name;
        this.text = text;
        this.children = [];
    }
    toString() {
        let tagString = '';
        if(this.children.length) {
            tagString =  tagString + `<${this.name}>`;
            for(const c of this.children) {
                tagString =  tagString + '\n' + c.toString();
            }
            tagString = tagString + '\n' + `</${this.name}>`;
        } else {
            tagString =  `<${this.name}>${this.text}</${this.name}>`;
        }
        return tagString;
    }
}

class HtmlBuilder {
    constructor(rootName) {
        this.rootName = rootName;
        this.rootTag = new Tag(rootName);
    }
    addChild(childName, chidText) {
        const child = new Tag(childName, chidText);
        this.rootTag.children.push(child);
        return this;
    }
    addSubChild(childName, chidText) {
        const subChild = new Tag(childName, chidText);
        this.rootTag.children[this.rootTag.children.length-1].children.push(subChild);
        return this;
    }
    build() {
        return this;
    }
    toString() {
        return this.rootTag.toString();
    }
}

const builder = new HtmlBuilder('table');
builder
    .addChild('th')
        .addSubChild('td', 'column1')
        .addSubChild('td', 'column2')
        .addSubChild('td', 'column3')
    .build()
    .addChild('tr')
        .addSubChild('td', 'one')
        .addSubChild('td', 'two')
        .addSubChild('td', 'three')
    .build();
console.log(builder.toString());