/**
 * DropDownList Grouping & Icons Samples
 */
import { DropDownList } from '@syncfusion/ej2-dropdowns';


this.default = () => {

    let vegetables: { [key: string]: Object }[] = [
        { Vegetable: 'Cabbage', Category: 'Leafy and Salad', Id: 'item1' },
        { Vegetable: 'Chickpea', Category: 'Beans', Id: 'item2' },
        { Vegetable: 'Garlic', Category: 'Bulb and Stem', Id: 'item3' },
        { Vegetable: 'Green bean', Category: 'Beans', Id: 'item4' },
        { Vegetable: 'Horse gram', Category: 'Beans', Id: 'item5' },
        { Vegetable: 'Nopal', Category: 'Bulb and Stem', Id: 'item6' },
        { Vegetable: 'Onion', Category: 'Bulb and Stem', Id: 'item7' },
        { Vegetable: 'Pumpkins', Category: 'Leafy and Salad', Id: 'item8' },
        { Vegetable: 'Spinach', Category: 'Leafy and Salad', Id: 'item9' },
        { Vegetable: 'Wheat grass', Category: 'Leafy and Salad', Id: 'item10' },
        { Vegetable: 'Yarrow', Category: 'Leafy and Salad', Id: 'item11' }
    ];

    let socialMedia: { [key: string]: Object }[] = [
        { Class: 'facebook', SocialMedia: 'Facebook', Id: 'media1' },
        { Class: 'google-plus', SocialMedia: 'Google Plus', Id: 'media2' },
        { Class: 'instagram', SocialMedia: 'Instagram', Id: 'media3' },
        { Class: 'linkedin', SocialMedia: 'LinkedIn', Id: 'media4' },
        { Class: 'skype', SocialMedia: 'Skype', Id: 'media5' },
        { Class: 'tumblr', SocialMedia: 'Tumblr', Id: 'media6' },
        { Class: 'twitter', SocialMedia: 'Twitter', Id: 'media7' },
        { Class: 'vimeo', SocialMedia: 'Vimeo', Id: 'media8' },
        { Class: 'whatsapp', SocialMedia: 'WhatsApp', Id: 'media9' },
        { Class: 'youtube', SocialMedia: 'YouTube', Id: 'media10' }
    ];

    let groupList: DropDownList = new DropDownList({
        dataSource: vegetables,
        fields: { groupBy: 'Category', text: 'Vegetable', value: 'Id' },
        placeholder: 'Select a vegetable',
        popupHeight: '200px'
    });
    groupList.appendTo('#vegetables');

    let iconList: DropDownList = new DropDownList({
        dataSource: socialMedia,
        fields: { text: 'SocialMedia', iconCss: 'Class', value: 'Id' },
        placeholder: 'Select a social media',
        popupHeight: '200px'
    });
    iconList.appendTo('#icons');
};