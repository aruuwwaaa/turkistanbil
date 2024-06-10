<template>
  <div>
    <!-- Burger menu button -->
    <button @click="toggleBurgerMenu">Menu</button>
    
    <!-- Main navigation -->
    <nav :class="{ 'is-active': isBurgerMenuOpen }">
      <ul class="navbar-nav">
        <!-- Other menu items -->

        <!-- Dropdown Menu Trigger -->
        <li @click="toggleDropdownMenu">Колледж</li>

        <!-- Dropdown Menu Items -->
        <li v-if="isDropdownMenuOpen">
          <ul>
            <li @click="onLinkClick">История колледжа</li>
            <li @click="onLinkClick">Важные факты</li>
            <!-- other dropdown items -->
          </ul>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isBurgerMenuOpen: false,
      isDropdownMenuOpen: false,
    };
  },
  methods: {
    toggleBurgerMenu() {
      this.isBurgerMenuOpen = !this.isBurgerMenuOpen;
    },
    toggleDropdownMenu() {
      this.isDropdownMenuOpen = !this.isDropdownMenuOpen;
    },
    onLinkClick() {
      // Logic to navigate to the specified page
      // For example: this.$router.push('/your-route')

      // Close both burger and dropdown menus
      this.isBurgerMenuOpen = false;
      this.isDropdownMenuOpen = false;
    }
  }
};
</script>

<style scoped>
/* Your CSS styles */
.navbar-nav > li > a {
  /* Styles for navbar links */
}
.is-active {
  /* Styles for when the burger menu is open */
}
/* Media queries */
@media (min-width: 990px) and (max-width: 1225px) {
  .navbar-nav > li > a {
    font-size: 10px;
  }
}
@media (min-width: 1225px) and (max-width: 1380px) {
  .navbar-nav > li > a {
    font-size: 14px;
  }
}
</style>