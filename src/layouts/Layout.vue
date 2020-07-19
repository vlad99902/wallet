<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated>
      <q-toolbar>
        
        <q-toolbar-title class = "absolute-center">
          Todo
        </q-toolbar-title>

      </q-toolbar>
    </q-header>

<!-- footer navigtion for the mobile -->

    <q-footer bordered class="bg-white text-white">
      <q-tabs 
        dense class="footer-style" align="justify">

        <q-route-tab
          v-for="link in essentialLinks"
          :to="link.link"
          :key="link.title" 
          :label="link.title"/>
        
      </q-tabs>
    </q-footer>  


<!-- all left toolbar navigation -->
    <q-drawer
      v-model="leftDrawerOpen"
      :breakpoint="767"
      :width = "200"
      show-if-above
      bordered
      content-class="footer-style"
    >
      <q-list dark>

<!-- link for the home page in left toolbar -->
<!-- link for the settings page in left toolbar -->

        <q-item 
          v-for="nav in essentialLinks"
          :key="nav.title"
          :to="nav.link"
          clickable 
          exact
          class="text-blue-grey-2"
          >
            <q-item-section avatar>
              <q-icon :name = "nav.icon"/>
            </q-item-section>
            <q-item-section>
              <q-item-label>{{nav.title}}</q-item-label>
            </q-item-section>
        </q-item> 

      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink.vue'

export default {
  name: 'MainLayout',

  components: {
    EssentialLink
  },

  data () {
    return {
      leftDrawerOpen: false,
      essentialLinks: [
        {
          title: 'Todo',
          icon: 'home',
          link: '/'
        },
        {
          title: 'Settings',
          icon: 'settings ',
          link: '/settings'
        }
        
      ]
    }
  }
}
</script>

<style lang = "scss">
/* for tabs only on mobile version */
  @media screen and (min-width: 768px){
    .q-footer {
      display: none;
    }
  }

  .footer-style {
    background:  #ff687e;
  }

  .q-drawer {
    .q-router-link--active {
      color:white !important;
    }
  }

</style>
