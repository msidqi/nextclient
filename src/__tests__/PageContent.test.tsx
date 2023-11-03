import MockAdapter from "axios-mock-adapter";
import { act, render, screen, waitFor } from "@testing-library/react";
import PageContent from "@/modules/pages/PageContent";
import { API } from "@/server/api";
import { componentMockedResponse, pagesMockedResponse } from "./mockedData";
import Providers from "@/modules/shared/Providers";
import { ErrorBoundary } from "react-error-boundary";

describe("PageContent", () => {
  let MockedAPI: MockAdapter;

  beforeEach(() => {
    MockedAPI = new MockAdapter(API);
  });

  afterEach(() => {
    MockedAPI.reset();
  });

  it("renders table with data", async () => {
    const slug = "quiz";
    const id = 25;
    MockedAPI.onGet(`/pages/${slug}`).reply(200, pagesMockedResponse);
    MockedAPI.onPost(`/requests/execute/${id}`).reply(
      200,
      componentMockedResponse
    );

    render(
      <Providers>
        <PageContent slug={slug} />
      </Providers>
    );

    const title = await screen.findByText("Tasks");
    expect(title).toBeInTheDocument();

    // test if columns are visible
    const columns =
      pagesMockedResponse.data[0].attributes.contentSections[0].columns;
    for (let i = 0; i < columns.length; i++) {
      const element = columns[i];
      const label = await screen.findByText(element.name);
      expect(label).toBeVisible();
    }

    // test if data is visible
    const data = componentMockedResponse.data;
    for (let i = 0; i < data.length; i++) {
      const element = data[i];

      if (element.endTime) {
        const dateElement = await screen.findByText(
          new Date(element.endTime).toUTCString()
        );
        expect(dateElement).toBeVisible();
      }

      const status = await screen.findAllByText(element.status);
      expect(status[0]).toBeVisible();
      const priority = await screen.findAllByText(element.priority);
      expect(priority[0]).toBeVisible();
    }
  });

  it("redirects to not-found when data array is empty", async () => {
    const slug = "quizz";
    const id = 26;
    MockedAPI.onGet(`/pages/${slug}`).reply(200, { data: [] });
    MockedAPI.onPost(`/requests/execute/${id}`).reply(200, { data: [] });

    render(
      <ErrorBoundary fallback={<div>Something went wrong</div>}>
        <Providers>
          <PageContent slug={slug} />
        </Providers>
      </ErrorBoundary>
    );
    // test that notFound() has thrown error used for redirection to 404 page
    const errorMessage = await screen.findByText("Something went wrong");
    await waitFor(async () => {
      expect(errorMessage).toBeVisible();
    });
  });
});
