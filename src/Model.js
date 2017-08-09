const Model = {
    gameSettings: {
        interval: 100,
    },
    buttons: [
        {
            text: 'Collect Bean',
            description: 'Gather a single bean.',
            class: 'collect-bean',
            cost: null,
            onClick: [{
                function: 'incrementResource',
                variables: [ 1, 'beans' ]
            }]
        },{
            text: 'Plant A Bean Sprout',
            description: 'Bean sprouts create 1 bean per second.',
            class: 'plant-bean-sprout',
            cost: {
                resource: 'beans',
                amount: 10,
            },
            onClick: [{
                function: 'incrementResource',
                variables: [ 1, 'beanSprouts' ]
            },{
                function: 'decrementResource',
                variables: [ 10, 'beans' ]
            }]
        },{
            text: 'Create Bean Extract',
            description: 'Create 1 bean extract by harvesting 5 bean sprouts.',
            class: 'create-bean-extract',
            cost: {
                resource: 'beanSprouts',
                amount: 5,
            },
            onClick: [{
                function: 'incrementResource',
                variables: [ 1, 'beanExtract' ]
            },{
                function: 'decrementResource',
                variables: [ 5, 'beanSprouts' ]
            }]
        },{
            text: 'Create Bean Stalk',
            description: 'Combine 10 bean sprouts to create a bean stalk. Bean Stalks spawn Bean Sprouts every so often.',
            class: 'create-bean-stalk',
            cost: {
                resource: 'beanSprouts',
                amount: 10,
            },
            onClick: [{
                function: 'incrementResource',
                variables: [ 1, 'beanStalk' ]
            },{
                function: 'decrementResource',
                variables: [ 10, 'beanSprouts' ]
            }]
        },{
            text: 'Harvest Stalks',
            description: 'Harvest 1 Stalk from 5 Bean Stalks. A Stalk can be used as support for large items.',
            class: 'harvest-stalk',
            cost: {
                resource: 'beanStalks',
                amount: 5,
            },
            onClick: [{
                function: 'incrementResource',
                variables: [ 1, 'stalk' ]
            },{
                function: 'decrementResource',
                variables: [ 5, 'beanStalks' ]
            }]
        },{
            text: 'Create Bean Potion',
            description: 'Combine 5 Bean Extract to create a bean potion.',
            class: 'create-bean-potion',
            cost: {
                resource: 'beanExtract',
                amount: 5,
            },
            options: [
                {
                    text: 'Red',
                    classes: 'create-red-potion',
                    description: 'A crimson concoction.',
                    onClick: [{
                        function: 'incrementResource',
                        variables: [ 1 , 'redPotion']
                    },{
                        function: 'decrementResource',
                        variables: [ 5, 'beanExtract' ]
                    }]
                },{
                    text: 'Blue',
                    classes: 'create-blue-potion',
                    description: 'Deep as the sky.',
                    onClick: [{
                        function: 'incrementResource',
                        variables: [ 1 , 'bluePotion']
                    },{
                        function: 'decrementResource',
                        variables: [ 5, 'beanExtract' ]
                    }]
                },{
                    text: 'Green',
                    classes: 'create-green-potion',
                    description: 'A toxin?',
                    onClick: [{
                        function: 'incrementResource',
                        variables: [ 1 , 'greenPotion']
                    },{
                        function: 'decrementResource',
                        variables: [ 5, 'beanExtract' ]
                    }]
                },{
                    text: 'Black',
                    classes: 'create-black-potion',
                    description: 'And cold as night.',
                    onClick: [{
                        function: 'incrementResource',
                        variables: [ 1 , 'blackPotion']
                    },{
                        function: 'decrementResource',
                        variables: [ 5, 'beanExtract' ]
                    }]
                }
            ],
        },{
            text: 'Infuse Beans',
            description: 'Combine one of each color potion and some beans to make a magic bean.',
            class: 'create-magic-bean',
            cost: [{
                resource: 'redPotion',
                amount: 1,
            },{
                resource: 'bluePotion',
                amount: 1,
            },{
                resource: 'greenPotion',
                amount: 1,
            },{
                resource: 'blackPotion',
                amount: 1,
            },{
                resource: 'beans',
                amount: 250,
            }],
            onClick: [{
                function: 'incrementResource',
                variables: [ 1, 'magicBean' ]
            },{
                function: 'decrementResource',
                variables: [ 1, 'redPotion' ]
            },{
                function: 'decrementResource',
                variables: [ 1, 'bluePotion' ]
            },{
                function: 'decrementResource',
                variables: [ 1, 'greenPotion' ]
            },{
                function: 'decrementResource',
                variables: [ 1, 'blackPotion' ]
            },{
                function: 'decrementResource',
                variables: [ 250, 'beans' ]
            }]
        },{
            text: 'Plant Magic Bean',
            description: 'A Magic Bean requires a lot of nutrients while it is growing, you must mulch 100 Bean Sprouts and 20 Beans Per Second until the Magic Bean is harvested.',
            class: 'plant-magic-bean',
            cost: [{
                resource: 'beanSprouts',
                amount: 100,
            }],
            upKeep: [{
                resource: 'beans',
                amount: 20,
                interval: 'second'
            }],
            onClick: [{
                function: 'incrementResource',
                variables: [ 1, 'Growing Magic Bean' ]
            },{
                function: 'decrementResource',
                variables: [ 100, 'beanSprouts' ]
            }]
        },
    ]
}

export default Model;