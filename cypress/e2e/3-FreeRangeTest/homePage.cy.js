describe("Home de www.freerangetesters.com", () => {
  beforeEach(() => {
    cy.visit("https://www.freerangetesters.com/");
  });

  it("Should have a title", () => {
    cy.title().should("include", "Free Range Testers");
    cy.contains("Entrar");
  });

  it("Existe la seccion de categorias y contiene 7 elementos ", () => {
    cy.get(
      '[data-testid="header-container"] > .sc-ettago > .sc-eTNRI > :nth-child(1) > .sc-dJGMql'
    ).click();
    cy.get(
      '[data-react-component="creator_ui/section_adapters/Categories"] > .sc-dmyCSP > [data-testid="container"] > [data-testid="grid"] >   '
    ).should("have.length", 7);
  });

  it("El campo Nombre del formulario, posee clase ", () => {
    cy.get("#email-form-name").should("have.class", "sc-bZHSRq kBeuPO");
  });

  it("Hay un link llamado Blog en la barra de navegacion", () => {
    cy.get(
      '[data-testid="header-container"] > .sc-ettago > .sc-eTNRI > :nth-child(3) > .sc-dJGMql'
    ).should("have.text", "Blog");
  });

  it("Existe una seccion que dice: Visita la seccion de cursos de la web ", () => {
    cy.get(
      '[data-react-component="creator_ui/section_adapters/Products"] > .sc-dmyCSP > [data-testid="container"] > [data-testid="grid"] > [data-testid="grid-header"] > .sc-kFCroH > .text-base'
    ).should("be.visible");
    cy.get(
      '[data-react-component="creator_ui/section_adapters/Products"] > .sc-dmyCSP > [data-testid="container"] > [data-testid="grid"] > [data-testid="grid-header"] > .sc-kFCroH > .text-base'
    ).should(
      "have.text",
      "Para ver todos los cursos, ¡visitá la sección Cursos de la web!"
    );
  });
});
