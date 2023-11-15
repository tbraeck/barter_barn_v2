require "test_helper"

class FreesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @free = frees(:one)
  end

  test "should get index" do
    get frees_url, as: :json
    assert_response :success
  end

  test "should create free" do
    assert_difference("Free.count") do
      post frees_url, params: { free: { claimant_id: @free.claimant_id, description: @free.description, int: @free.int, name: @free.name, user_id: @free.user_id } }, as: :json
    end

    assert_response :created
  end

  test "should show free" do
    get free_url(@free), as: :json
    assert_response :success
  end

  test "should update free" do
    patch free_url(@free), params: { free: { claimant_id: @free.claimant_id, description: @free.description, int: @free.int, name: @free.name, user_id: @free.user_id } }, as: :json
    assert_response :success
  end

  test "should destroy free" do
    assert_difference("Free.count", -1) do
      delete free_url(@free), as: :json
    end

    assert_response :no_content
  end
end
