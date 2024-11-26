// import './CreateTodoButton.css'

export function CardApp() {
  return (
    <div id="componente" class="card shadow-sm">
      <img
        src="https://tairo.cssninja.io/img/apps/3.jpg"
        class="card-img-top"
        alt="Project Preview"
      />

      <div class="card-body">
        <img
          src="https://tairo.cssninja.io/img/icons/logos/flashlite.svg"
          class="rounded-circle border me-1"
          width="40"
          alt="Avatar 1"
        />
        <div class="ms-1">
          <h5 class="card-title mb-0">
            <span>Delivery App Project </span>
          </h5>
          <p class="text-muted">Flashlite | Delivery</p>
        </div>
        <div class="bg-light">
          <div class="d-flex justify-content-between align-items-center mt-4">
            <div class="text-muted">
              <span>13 testing</span>
            </div>
            <div class="d-flex">
              <img
                src="https://tairo.cssninja.io/img/avatars/12.svg"
                class="rounded-circle border me-1"
                width="40"
                alt="Avatar 1"
              />
              <img
                src="https://tairo.cssninja.io/img/avatars/13.svg"
                class="rounded-circle border me-1"
                width="40"
                alt="Avatar 2"
              />
              <img
                src="https://tairo.cssninja.io/img/avatars/11.svg"
                class="rounded-circle border"
                width="40"
                alt="Avatar 3"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}