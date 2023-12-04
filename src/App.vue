<script setup lang="ts">

</script>

<template>
  <ILayout>
    <IContainer>
      <IRow>
        <IColumn xs="12">
          <IHeader color="primary" class="_text-align:center;_width:auto!">
            <h1>Language Challenge!</h1>
            <p>
              When programming challenges just aren't hard enough
            </p>
            <INavbar>
              <INav class="texs">
                <INavItem  :to="{name: 'About'}">About</INavItem >
                <INavItem  :to="{name: 'Home'}">Pick a Challenge</INavItem >
                <INavItem  :to="{name:'Languages'}">See all Languages</INavItem >
              </INav>
            </INavbar>
          </IHeader>
        </IColumn>
      </IRow>
    </IContainer>
  <ILayoutContent>
    <ICard>
      <router-view></router-view>
    </ICard>
  </ILayoutContent>
  <ILayoutFooter>

  </ILayoutFooter>
  </ILayout>
</template>

<style scoped>

</style>
