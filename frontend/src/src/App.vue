<template>
    <v-app>
        <v-app-bar app>
            <v-toolbar-title class="headline text-uppercase">
                <span class="font-weight-light">English Exercises</span>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-menu transition="slide-y-transition" bottom>
                <template v-slot:activator="{ on }">
                    <v-btn v-on="on">
                        Личный кабинет
                    </v-btn>
                </template>
                <v-list>
                    <v-list-item v-for="(item, i) in items" :key="i" @click="">
                        {{ item.title }}
                    </v-list-item>
                </v-list>
            </v-menu>
        </v-app-bar>

        <v-content>
          <v-container>
            <vocabulary/>
          </v-container>
        </v-content>
    </v-app>
</template>

<script>
    import Vocabulary from './pages/vocabulary/components/Vocabulary';

    export default {
        name: 'App',
        components: {
            Vocabulary,
        },
        data: () => ({
            items: [
                {title: 'Click Me'},
                {title: 'Click Me'},
                {title: 'Click Me'},
                {title: 'Выход'},
            ],
        }),
    };
</script>
