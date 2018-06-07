<template>
  <div class="modal" id="modal-id" v-bind:class="[nav ? 'active' : '']">
    <a href="#close" class="modal-overlay" aria-label="Close"></a>
    <div class="modal-container">
      <div class="modal-header">
        <a href="#close" class="btn btn-clear float-right" aria-label="Close" @click="nav = !nav"></a>
        <div class="modal-title h5">Modal title</div>
      </div>
      <div class="modal-body">
        <div class="content">
          <!-- content here -->
        </div>
      </div>
      <div class="modal-footer">
        ...
      </div>
    </div>
  </div>
</template>

<script>
import Marked from 'marked'
export default {
  data () {
    return {
      nav: true
    }
  }
}
</script>