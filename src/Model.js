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
                variables: [ 1, 'beanPlants' ]
            },{
                function: 'decrementResource',
                variables: [ 10, 'beans' ]
            }]
        },{
            text: 'Create Bean Extract',
            description: 'Create 1 bean extract by harvesting 5 bean sprouts.',
            class: 'create-bean-extract',
            cost: {
                resource: 'beanPlants',
                amount: 5,
            },
            onClick: [{
                function: 'incrementResource',
                variables: [ 1, 'beanExtract' ]
            },{
                function: 'decrementResource',
                variables: [ 5, 'beanPlants' ]
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
        }
    ]
}

export default Model;