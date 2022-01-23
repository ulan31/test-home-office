<template>
  <div>
    <table border="1">
      <th></th>
      <th colspan="2">Small</th>
      <th colspan="2">Medium</th>
      <th colspan="2">Large</th>
      <tr>
        <td>Primary</td>
        <td>
          <ui-button class="btn btn-sm btn-primary">Button</ui-button>
        </td>
        <td>
          <ui-button class="btn btn-sm btn-primary">
            <template #icon>
              <ui-icon name="plus" class="btn-icon-light"></ui-icon>
            </template>
            Button
          </ui-button>
        </td>
        <td>
          <ui-button class="btn btn-md btn-primary">Button</ui-button>
        </td>
        <td>
          <ui-button class="btn btn-md btn-primary">
            <template #icon>
              <ui-icon name="plus" class="btn-icon-light"></ui-icon>
            </template>
            Button
          </ui-button>
        </td>
        <td>
          <ui-button class="btn btn-lg btn-primary">Button</ui-button>
        </td>
        <td>
          <ui-button class="btn btn-lg btn-primary">
            <template #icon>
              <ui-icon name="plus" class="btn-icon-light"></ui-icon>
            </template>
            Button
          </ui-button>
        </td>
      </tr>
      <tr>
        <td>Secondary</td>
        <td>
          <ui-button class="btn btn-sm btn-secondary">Button</ui-button>
        </td>
        <td>
          <ui-button class="btn btn-sm btn-secondary">
            <template #icon>
              <ui-icon name="plus" class="btn-icon-blue"></ui-icon>
            </template>
            Button
          </ui-button>
        </td>
        <td>
          <ui-button class="btn btn-md btn-secondary">Button</ui-button>
        </td>
        <td>
          <ui-button class="btn btn-md btn-secondary">
            <template #icon>
              <ui-icon name="plus" class="btn-icon-blue"></ui-icon>
            </template>
            Button
          </ui-button>
        </td>
        <td>
          <ui-button class="btn btn-lg btn-secondary">Button</ui-button>
        </td>
        <td>
          <ui-button class="btn btn-lg btn-secondary">
            <template #icon>
              <ui-icon name="plus" class="btn-icon-blue"></ui-icon>
            </template>
            Button
          </ui-button>
        </td>
      </tr>
      <tr>
        <td>
          Muted
        </td>
        <td>
          <ui-button class="btn btn-sm btn-muted">Button</ui-button>
        </td>
        <td>
          <ui-button class="btn btn-sm btn-muted">
            <template #icon>
              <ui-icon name="plus" class="btn-icon-blue"></ui-icon>
            </template>
            Button
          </ui-button>
        </td>
        <td>
          <ui-button class="btn btn-md btn-muted">Button</ui-button>
        </td>
        <td>
          <ui-button class="btn btn-md btn-muted">
            <template #icon>
              <ui-icon name="plus" class="btn-icon-blue"></ui-icon>
            </template>
            Button
          </ui-button>
        </td>
        <td>
          <ui-button class="btn btn-lg btn-muted">Button</ui-button>
        </td>
        <td>
          <ui-button class="btn btn-lg btn-muted">
            <template #icon>
              <ui-icon name="plus" class="btn-icon-blue"></ui-icon>
            </template>
            Button
          </ui-button>
        </td>
      </tr>
      <tr>
        <td>
          Tertiary
        </td>
        <td>
          <ui-button class="btn btn-sm btn-tertiary">Button</ui-button>
        </td>
        <td>
          <ui-button class="btn btn-sm btn-tertiary">
            <template #icon>
              <ui-icon name="plus" class="btn-icon-blue"></ui-icon>
            </template>
            Button
          </ui-button>
        </td>
        <td>
          <ui-button class="btn btn-md btn-tertiary">Button</ui-button>
        </td>
        <td>
          <ui-button class="btn btn-md btn-tertiary">
            <template #icon>
              <ui-icon name="plus" class="btn-icon-blue"></ui-icon>
            </template>
            Button
          </ui-button>
        </td>
        <td>
          <ui-button class="btn btn-lg btn-tertiary">Button</ui-button>
        </td>
        <td>
          <ui-button class="btn btn-lg btn-tertiary">
            <template #icon>
              <ui-icon name="plus" class="btn-icon-blue"></ui-icon>
            </template>
            Button
          </ui-button>
        </td>
      </tr>
      <tr>
        <td>
          Outline
        </td>
        <td>
          <ui-button class="btn btn-sm btn-outline">Button</ui-button>
        </td>
        <td>
          <ui-button class="btn btn-sm btn-outline">
            <template #icon>
              <ui-icon name="plus" class="btn-icon-blue"></ui-icon>
            </template>
            Button
          </ui-button>
        </td>
        <td>
          <ui-button class="btn btn-md btn-outline">Button</ui-button>
        </td>
        <td>
          <ui-button class="btn btn-md btn-outline">
            <template #icon>
              <ui-icon name="plus" class="btn-icon-blue"></ui-icon>
            </template>
            Button
          </ui-button>
        </td>
        <td>
          <ui-button class="btn btn-lg btn-outline">Button</ui-button>
        </td>
        <td>
          <ui-button class="btn btn-lg btn-outline">
            <template #icon>
              <ui-icon name="plus" class="btn-icon-blue"></ui-icon>
            </template>
            Button
          </ui-button>
        </td>
      </tr>
      <tr>
        <td>
          Commerce
        </td>
        <td>
          <ui-button class="btn btn-sm btn-commerce">Button</ui-button>
        </td>
        <td>
          <ui-button class="btn btn-sm btn-commerce">
            <template #icon>
              <ui-icon name="plus" class="btn-icon-light"></ui-icon>
            </template>
            Button
          </ui-button>
        </td>
        <td>
          <ui-button class="btn btn-md btn-commerce">Button</ui-button>
        </td>
        <td>
          <ui-button class="btn btn-md btn-commerce">
            <template #icon>
              <ui-icon name="plus" class="btn-icon-light"></ui-icon>
            </template>
            Button
          </ui-button>
        </td>
        <td>
          <ui-button class="btn btn-lg btn-commerce">Button</ui-button>
        </td>
        <td>
          <ui-button class="btn btn-lg btn-commerce">
            <template #icon>
              <ui-icon name="plus" class="btn-icon-light"></ui-icon>
            </template>
            Button
          </ui-button>
        </td>
      </tr>
    </table>
  </div>
</template>

<style scoped>
  table {
    border-collapse: collapse;
    background: #E5E5E5;
  }

  td {
    padding: 15px;
  }
</style>

