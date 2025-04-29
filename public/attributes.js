/**
 * первые атрибуты - зеленый, синий и золотистый - тело, разум, дух
 *
 * @type {{css: string, children: [{css: string, children: [{children: [{name: string, description: string},{name: string, description: string},{name: string, description: string}], name: string, description: string},{children: [{name: string, description: string},{name: string, description: string},{name: string, description: string}], name: string, description: string},{children: [{name: string, description: string},{name: string, description: string},{name: string, description: string}], name: string, description: string}], name: string, icon: string, description: string, style: {fill: string, stroke: string}},{css: string, children: [{children: [{name: string, description: string},{name: string, description: string},{name: string, description: string}], name: string, description: string},{children: [{name: string, description: string},{name: string, description: string},{name: string, description: string}], name: string, description: string},{children: [{name: string, description: string},{name: string, description: string},{name: string, description: string}], name: string, description: string}], name: string, icon: string, description: string},{css: string, children: [{children: [{name: string, description: string},{name: string, description: string},{name: string, description: string}], name: string, description: string},{children: [{name: string, description: string},{name: string, description: string},{name: string, description: string}], name: string, description: string},{children: [{name: string, description: string},{name: string, description: string},{name: string, description: string}], name: string, description: string}], name: string, icon: string, description: string}], name: string, description: string}}
 */
const mindmapData = {
    "name": "Я",
    "description": "Азур-источник восходящего",
    "style": {
        "fill": "white",
        "stroke": "#cc6600",
        "icon": "triangle"
    },
    "children": [
        {
            "name": "Тело",
            "description": "Показатель развития физических характеристик относительно первого предела Восхождения.",
            "css": "fill: lightgreen;",
            "style": {
                "fill": "#00ff00",
                "stroke": "#cc6666",
                "icon": `<svg viewBox="0 0 32 32" class="icon"><path d="M16 2 L30 30 L2 30 Z" fill="white"/></svg>`
            },
            "icon": `<svg viewBox="0 0 32 32" class="icon"><path d="M16 2 L20 12 L30 12 L22 19 L25 30 L16 24 L7 30 L10 19 L2 12 L12 12 Z" fill="white"/></svg>`,
            "children": [
                {
                    "name": "Подветвь 1.1",
                    "description": "Описание подветви 1.1",
                    "style": {
                        "fill": "#ffcc99",
                        "stroke": "#cc9966",
                        "icon": "triangle"
                    },
                    "children": [
                        {"name": "Лист 1.1.1", "description": "Описание листа 1.1.1"},
                        {"name": "Лист 1.1.2", "description": "Описание листа 1.1.2"},
                        {"name": "Лист 1.1.3", "description": "Описание листа 1.1.3"}
                    ]
                },
                {
                    "name": "Подветвь 1.2",
                    "description": "Описание подветви 1.2",
                    "children": [
                        {"name": "Лист 1.2.1", "description": "Описание листа 1.2.1"},
                        {"name": "Лист 1.2.2", "description": "Описание листа 1.2.2"},
                        {"name": "Лист 1.2.3", "description": "Описание листа 1.2.3"}
                    ]
                },
                {
                    "name": "Подветвь 1.3",
                    "description": "Описание подветви 1.3",
                    "children": [
                        {"name": "Лист 1.3.1", "description": "Описание листа 1.3.1"},
                        {"name": "Лист 1.3.2", "description": "Описание листа 1.3.2"},
                        {"name": "Лист 1.3.3", "description": "Описание листа 1.3.3"}
                    ]
                }
            ]
        },
        {
            "name": "Разум",
            "description": "Показатель интеллектуального, мыслительного и психоэмоционального развития относительно первого предела Восхождения.",
            "style": {
                "fill": "#9999ff",
                "stroke": "#66cc66",
                "icon": `<svg viewBox="0 0 32 32" class="icon"><path d="M16 2 L20 12 L30 12 L22 19 L25 30 L16 24 L7 30 L10 19 L2 12 L12 12 Z" fill="white"/></svg>`
            },
            "children": [
                {
                    "name": "Подветвь 2.1",
                    "description": "Описание подветви 2.1",
                    "children": [
                        {"name": "Лист 2.1.1", "description": "Описание листа 2.1.1"},
                        {"name": "Лист 2.1.2", "description": "Описание листа 2.1.2"},
                        {"name": "Лист 2.1.3", "description": "Описание листа 2.1.3"}
                    ]
                },
                {
                    "name": "Подветвь 2.2",
                    "description": "Описание подветви 2.2",
                    "children": [
                        {"name": "Лист 2.2.1", "description": "Описание листа 2.2.1"},
                        {"name": "Лист 2.2.2", "description": "Описание листа 2.2.2"},
                        {"name": "Лист 2.2.3", "description": "Описание листа 2.2.3"}
                    ]
                },
                {
                    "name": "Подветвь 2.3",
                    "description": "Описание подветви 2.3",
                    "children": [
                        {"name": "Лист 2.3.1", "description": "Описание листа 2.3.1"},
                        {"name": "Лист 2.3.2", "description": "Описание листа 2.3.2"},
                        {"name": "Лист 2.3.3", "description": "Описание листа 2.3.3"}
                    ]
                }
            ]
        },
        {
            "name": "Дух",
            "description": "Показатель духовного и ментального развития относительно первого предела Восхождения.",
            "style": {
                "fill": "gold",
                "stroke": "#6666cc",
                "icon": `<svg viewBox="0 0 32 32" class="icon"><path d="M16 2 L20 12 L30 12 L22 19 L25 30 L16 24 L7 30 L10 19 L2 12 L12 12 Z" fill="white"/></svg>`
            },
            "children": [
                {
                    "name": "Подветвь 3.1",
                    "description": "Описание подветви 3.1",
                    "children": [
                        {
                            "name": "Лист 3.1.1",
                            "description": "Описание листа 3.1.1"
                        },
                        {
                            "name": "Лист 3.1.2",
                            "description": "Описание листа 3.1.2"
                        },
                        {
                            "name": "Лист 3.1.3",
                            "description": "Описание листа 3.1.3"
                        }
                    ]
                },
                {
                    "name": "Подветвь 3.2",
                    "description": "Описание подветви 3.2",
                    "children": [
                        {"name": "Лист 3.2.1", "description": "Описание листа 3.2.1"},
                        {"name": "Лист 3.2.2", "description": "Описание листа 3.2.2"},
                        {"name": "Лист 3.2.3", "description": "Описание листа 3.2.3"}
                    ]
                },
                {
                    "name": "Подветвь 3.3",
                    "description": "Описание подветви 3.3",
                    "children": [
                        {"name": "Лист 3.3.1", "description": "Описание листа 3.3.1"},
                        {"name": "Лист 3.3.2", "description": "Описание листа 3.3.2"},
                        {"name": "Лист 3.3.3", "description": "Описание листа 3.3.3"}
                    ]
                }
            ]
        }
    ]
};